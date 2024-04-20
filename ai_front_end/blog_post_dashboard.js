function createBlogPostCard(title, description, readMoreLink) {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden');
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('p-6');
  
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('text-xl', 'font-bold', 'mb-2');
    cardTitle.textContent = title;
  
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('text-gray-700', 'mb-4');
    cardDescription.textContent = description;
  
    const readMoreLink = document.createElement('a');
    readMoreLink.classList.add('text-blue-500', 'hover:text-blue-700');
    readMoreLink.href = readMoreLink;
    readMoreLink.textContent = 'Read More';
  
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(readMoreLink);
    card.appendChild(cardContent);
  
    return card;
  }
  
  // Example usage
  const blogPostsContainer = document.querySelector('.grid');
  const blogPosts = [
    { title: 'Blog Post 1', description: 'Description for Blog Post 1', readMoreLink: '#' },
    { title: 'Blog Post 2', description: 'Description for Blog Post 2', readMoreLink: '#' },
    { title: 'Blog Post 3', description: 'Description for Blog Post 3', readMoreLink: '#' },
  ];
  
  blogPosts.forEach(post => {
    const blogPostCard = createBlogPostCard(post.title, post.description, post.readMoreLink);
    blogPostsContainer.appendChild(blogPostCard);
  });