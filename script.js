fetch('https://jerac.com.mx/info/wp-json/wp/v2/posts?per_page=5&_embed')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('latest-posts-container');
    let html = '<div class="posts-grid">';
    
    posts.forEach(post => {
      // Obtener imagen destacada (si existe)
      const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/400x225';
      const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 100) + '...';
      
      html += `
        <div class="post-card">
          <div class="post-image">
            <img src="${featuredImage}" alt="${post.title.rendered}">
          </div>
          <div class="post-content">
            <h3 class="post-title">${post.title.rendered}</h3>
            <div class="post-excerpt">${excerpt}</div>
            <a href="${post.link}" class="read-more-btn" target="_blank">Leer más →</a>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    container.innerHTML = html;
  })
  .catch(error => console.error('Error:', error));