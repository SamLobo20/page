export async function fetchPost(id) {
  console.log(id);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const result = await response.json()
  return result
}
