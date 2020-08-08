import blogList from './BlogList';

const Blog = (parent, document) => {
    const template = `
        <div class="page-blog">
                <header>
                    <h1>Blog</h1>
                    <p>
                        Here are our own articles written by our food crazy friends and chefs. 
                    </p>
                </header>
                <div class="blog-list">
                    ${ blogList.map(blog => `
                        <div class="blog">
                            <div class='blog-image' style="background: url(${blog.imageUrl}) center center no-repeat">
                                <img src="${blog.imageUrl}"/>
                            </div>
                            <div class="blog-content">
                                <h2>${blog.title}</h2>
                                <p>${blog.description}</p>
                                <div class="blog-meta-data">
                                    <div class="author">By - ${blog.author}</div>
                                    <div class="date">${blog.date}</div>
                                </div>
                            </div>
                        </div>`).join('')
        }
                </div>
        </div>
    `
    const container = document.createElement('DIV');
    container.classList.add('page-blog');
    container.insertAdjacentHTML('beforeend', template);
    parent.innerHTML = '';
    parent.appendChild(container);
}

export default Blog;