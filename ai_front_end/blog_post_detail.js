// Fetch blog post data from your server or database
const blogPostData = {
    title: 'Blog Post Title',
    imageUrl: 'https://via.placeholder.com/960x540',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... (blog post content)',
    publishDate: 'June 1, 2023',
    category: 'Technology',
  };
  
  // Select the relevant HTML elements
  const blogPostTitle = document.querySelector('h2');
  const blogPostImage = document.querySelector('img');
  const blogPostContent = document.querySelector('.text-gray-700');
  const blogPostPublishDate = document.querySelectorAll('.text-gray-700')[1];
  const blogPostCategory = document.querySelectorAll('.text-gray-700')[2];
  
  // Populate the blog post content
  blogPostTitle.textContent = blogPostData.title;
  blogPostImage.src = blogPostData.imageUrl;
  blogPostImage.alt = blogPostData.title;
  blogPostContent.innerHTML = `<p>${blogPostData.content.replace(/\n/g, '</p><p>')}</p>`;
  blogPostPublishDate.textContent = blogPostData.publishDate;
  blogPostCategory.textContent = blogPostData.category;