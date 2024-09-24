// blogpage to homepage redirection
document.getElementById('home-btn').addEventListener('click', function () {
    window.location.href = "./index.html";
})
// homepage to blogpage redirection
document.getElementById('blog-btn').addEventListener('click', function () {
    console.log('clicked')
    window.location.href = "./blog.html";
})