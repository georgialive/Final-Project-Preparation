async function main() {
    const id = localStorage.getItem("id");
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=:${id}`);
    const postsData = posts.json();

    console.log(postsData);
}

main()