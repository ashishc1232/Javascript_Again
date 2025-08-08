<!DOCTYPE html>
<html>
<head>
    <title>Axios Example</title>
</head>
<body>
    <h1>Axios in Vanilla JS</h1>
    <button onclick="getData()">Fetch Data</button>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        function getData() {
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(function(response) {
                    console.log("Data received:", response.data);
                    alert("Title: " + response.data.title);
                })
                .catch(function(error) {
                    console.error("Error:", error);
                });
        }
    </script>
</body>
</html>
