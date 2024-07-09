// Check if the current path is "/old-path"
if (window.location.pathname === '/old-path') {
  // Get the current query parameters
  const queryParams = window.location.search;
  
  // Construct the new URL
  const newUrl = window.location.origin + '/new-path' + queryParams;
  
  // Redirect to the new URL
  window.location.href = newUrl;
}
