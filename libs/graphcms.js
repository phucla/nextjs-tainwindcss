require("isomorphic-fetch");

async function fetchAPI(query, { variables, preview } = {}) {
  console.log("process.env.GRAPHCMS_PROJECT_API");
  console.log(query, variables);
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_DEV_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  // return json.data;
  return "";
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        stage: "DRAFT",
        slug,
      },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts {
        slug
      }
    }
  `);
  return data.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query MyQuery {
      users_ID {
        userName
        id
      }
    }
  `
  );
  console.log("data", data);
  return data;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        title
        slug
        content {
          html
        }
        date
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
      }
      morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not_in: [$slug]}) {
        title
        slug
        excerpt
        date
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        slug,
      },
    }
  );
  return data;
}
