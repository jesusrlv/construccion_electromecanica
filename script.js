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
      <!-- Single Item -->
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <div class="thumbs overlay">
                                <img src="${featuredImage}" alt="Thumb" alt="${post.title.rendered}">
                                <div class="info">
                                  <h4>${excerpt}</h4>
                                  <p>
                                      <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ex, minima obcaecati, magni non corrupti harum tenetur nesciunt omnis quos accusantium ullam commodi consequatur nulla. Neque sunt aut enim laudantium!. -->
                                  </p>
                                </div>
                            </div>
                            <div class="info">
                                <div class="content">
                                    <div class="top-info">
                                        <h4><a href="${post.link}">${post.title.rendered}</a></h4>
                                    </div>
                                    <div class="bottom">
                                        <i class="flaticon-renewable-energy"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Item -->
        
      `;
    });
    
    html += '</div>';
    container.innerHTML = html;
  })
  .catch(error => console.error('Error:', error));

  // <div class="post-card">
        //   <div class="post-image">
        //     <img src="${featuredImage}" alt="${post.title.rendered}">
        //   </div>
        //   <div class="post-content">
        //     <h3 class="post-title">${post.title.rendered}</h3>
        //     <div class="post-excerpt">${excerpt}</div>
        //     <a href="${post.link}" class="read-more-btn" target="_blank">Leer más →</a>
        //   </div>
        // </div>

        // <div class="col-md-4 col-sm-6 equal-height">
        //   <div class="item">
        //     <div class="thumbs overlay">
        //       <img src="${featuredImage}" alt="Thumb" alt="${post.title.rendered}">
        //       <div class="info">
        //         <h4>${post.title.rendered}</h4>
        //         <a href="${post.link}" class="read-more-btn" target="_blank">Leer más →</a>
        //         <p>
        //             ${excerpt}
        //         </p>
        //       </div>
        //     </div>
        //   </div>
        // </div>