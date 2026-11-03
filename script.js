
const categories = [
  "All", "Technology", "Education", "Lifestyle", "Fashion",
  "Food", "Travel", "Business", "Health", "Motivation",
  "Programming", "Beauty", "Islamic"
];

const titles = {
  Technology: [
    "How Technology Is Changing Our Daily Lives", "The Future of Artificial Intelligence",
    "Smart Gadgets That Make Life Easier", "Digital Innovation in the Modern World",
    "Why Technology Matters Today", "The Evolution of Modern Technology",
    "How the Internet Connects the World", "Technology Trends You Should Know",
    "The Power of Digital Transformation", "A Beginner's Guide to Tech Innovation",
    "How Technology Helps Students", "The Rise of Smart Devices",
    "Technology and the Future of Work", "Digital Tools for Everyday Life",
    "Exploring the World of Innovation", "How Apps Are Changing Our Habits",
    "The Next Generation of Technology"
  ],
  Education: [
    "Why Learning Never Stops", "Smart Study Habits for Students",
    "How to Make Learning More Effective", "The Importance of Education",
    "Tips for Better Exam Preparation", "How Reading Improves Your Knowledge",
    "Online Learning in the Modern Age", "Building a Successful Study Routine",
    "How to Stay Focused While Studying", "The Benefits of Learning New Skills",
    "Education Opens New Opportunities", "How to Manage Your Study Time",
    "Learning Beyond the Classroom", "Simple Ways to Improve Your Memory",
    "The Value of Creative Thinking", "How Teachers Inspire Students",
    "A Guide to Lifelong Learning"
  ],
  Lifestyle: [
    "Simple Habits for a Better Life", "How to Build a Balanced Routine",
    "Small Changes That Make a Big Difference", "The Beauty of Simple Living",
    "Creating a Peaceful Daily Routine", "How to Organize Your Day",
    "Finding Balance in a Busy World", "The Importance of Personal Growth",
    "How to Make Time for Yourself", "A Guide to Mindful Living",
    "Healthy Habits for Everyday Life", "How to Stay Organized",
    "Making Your Home More Comfortable", "The Art of Slow Living",
    "How to Create Positive Habits", "Ways to Reduce Daily Stress",
    "Living a More Meaningful Life"
  ],
  Fashion: [
    "Fashion Trends Worth Exploring", "How to Build a Timeless Wardrobe",
    "Simple Outfit Ideas for Every Day", "The Art of Personal Style",
    "Fashion Tips for a Classy Look", "How to Choose the Right Colors",
    "Minimal Fashion for Modern Living", "Everyday Style Inspiration",
    "How Accessories Complete an Outfit", "Building Confidence Through Style",
    "Fashion Ideas on a Budget", "The Beauty of Classic Clothing",
    "How to Find Your Signature Style", "A Beginner's Guide to Fashion",
    "Modern Trends and Timeless Pieces", "How to Organize Your Wardrobe",
    "Style Tips for Every Season"
  ],
  Food: [
    "Easy Recipes for Busy Days", "The Joy of Homemade Food",
    "Healthy Meals You Can Make at Home", "A Beginner's Guide to Cooking",
    "Delicious Breakfast Ideas", "How to Make Cooking More Fun",
    "Exploring Different Food Cultures", "Simple Snacks for Everyone",
    "The Secret of Good Homemade Meals", "Fresh Ingredients for Better Food",
    "Quick Lunch Ideas for Students", "The Art of Beautiful Food Presentation",
    "Easy Desserts to Try at Home", "Why Balanced Meals Matter",
    "Cooking Tips Everyone Should Know", "A Journey Through World Cuisine",
    "Making Healthy Eating Simple"
  ],
  Travel: [
    "Beautiful Places to Explore", "A Beginner's Guide to Travelling",
    "How to Plan a Memorable Trip", "Travel Tips for First-Time Explorers",
    "The Beauty of Mountain Destinations", "Exploring New Cultures Through Travel",
    "How to Travel on a Budget", "Making Memories Around the World",
    "Why Travelling Changes Your Perspective", "The Joy of Discovering New Places",
    "A Guide to Smart Travel Planning", "Hidden Gems Worth Discovering",
    "How to Pack for a Short Trip", "Exploring Nature and Adventure",
    "The Art of Slow Travel", "Travel Photography Tips",
    "Planning Your Next Adventure"
  ],
  Business: [
    "How to Start a Small Business", "Business Skills Everyone Should Learn",
    "The Basics of Entrepreneurship", "How to Build a Strong Brand",
    "Smart Ideas for New Entrepreneurs", "Understanding the Digital Business World",
    "How to Manage Your Money", "The Importance of Customer Service",
    "Building a Successful Business Plan", "Marketing Tips for Beginners",
    "How to Turn Ideas Into Opportunities", "The Power of Creative Thinking in Business",
    "Building Trust With Customers", "Simple Productivity Tips for Entrepreneurs",
    "How Small Businesses Grow", "Understanding Modern Marketing",
    "Lessons Every Entrepreneur Should Know"
  ],
  Health: [
    "Simple Ways to Stay Healthy", "Why Daily Exercise Matters",
    "Building Healthy Eating Habits", "The Importance of Quality Sleep",
    "How to Create a Wellness Routine", "Healthy Habits for a Better Life",
    "Why Hydration Is Important", "The Benefits of Walking Every Day",
    "How to Take Care of Yourself", "Understanding Balanced Nutrition",
    "Simple Fitness Ideas for Beginners", "The Value of a Healthy Routine",
    "How to Make Time for Exercise", "Everyday Wellness Tips",
    "Taking Small Steps Toward Better Health", "The Importance of Rest and Recovery",
    "Creating a Healthy Lifestyle"
  ],
  Motivation: [
    "Believe in Yourself and Keep Going", "Small Steps Lead to Big Success",
    "How to Stay Motivated Every Day", "Never Stop Working on Your Dreams",
    "The Power of a Positive Mindset", "Turning Challenges Into Opportunities",
    "How to Build Self Confidence", "Your Journey Is Your Own",
    "Why Consistency Matters More Than Perfection", "Learning From Every Experience",
    "Start Today, Not Tomorrow", "The Importance of Setting Goals",
    "How to Overcome Self Doubt", "Keep Growing, Keep Learning",
    "The Courage to Try Something New", "Making Progress One Day at a Time",
    "Your Future Starts With Today's Choices"
  ],
  Programming: [
    "A Beginner's Guide to HTML", "Why Every Student Should Learn JavaScript",
    "Understanding CSS the Easy Way", "How to Start Your Coding Journey",
    "Frontend Development for Beginners", "The Basics of Web Development",
    "How to Build Your First Website", "Understanding JavaScript Functions",
    "Why GitHub Is Important for Developers", "Learning Programming Step by Step",
    "The Difference Between Frontend and Backend", "How to Improve Your Coding Skills",
    "Introduction to Node.js", "Building Responsive Websites",
    "Common Mistakes New Programmers Make", "How to Practice Coding Every Day",
    "The Future of Web Development"
  ],
  Beauty: [
    "Simple Beauty Habits for Everyday Life", "A Beginner's Guide to Skincare",
    "How to Build a Simple Beauty Routine", "Everyday Self-Care Ideas",
    "The Importance of Skin Protection", "Beauty Tips for a Fresh Look",
    "How to Organize Your Beauty Products", "Simple Makeup Ideas for Beginners",
    "Understanding Your Personal Style", "A Guide to Everyday Grooming",
    "The Beauty of Natural Confidence", "How to Create a Morning Routine",
    "Simple Ways to Practice Self-Care", "Beauty Essentials Worth Knowing",
    "Keeping Your Routine Simple", "Everyday Tips for Feeling Your Best",
    "Confidence Is Your Best Accessory"
  ],
  Islamic: [
    "The Importance of Gratitude in Islam", "Small Good Deeds With Great Value",
    "The Beauty of Patience", "Why Prayer Matters in Daily Life",
    "Learning From the Quran", "The Importance of Good Character",
    "Kindness Is a Beautiful Quality", "The Value of Helping Others",
    "Making Time for Reflection", "The Importance of Honesty",
    "Building Good Habits Through Faith", "The Beauty of Sharing Knowledge",
    "Why Forgiveness Matters", "The Importance of Respecting Parents",
    "Finding Peace Through Remembrance", "The Value of Sincere Intentions",
    "A Reminder to Be Thankful"
  ]
};

const descriptions = [
  "Discover useful ideas, practical tips and fresh perspectives that can help you learn something new.",
  "Explore this topic with simple explanations, helpful examples and ideas for everyday life.",
  "A thoughtful guide filled with inspiration, useful knowledge and practical information.",
  "Learn how small changes and new ideas can make a positive difference in your daily routine.",
  "Take a closer look at this interesting topic and discover things worth remembering.",
  "This article brings together simple advice, creative ideas and useful information for beginners."
];

const sampleAuthors = [
  "Ayesha Khan", "Fatima Ali", "Hassan Ahmed", "Zoya Malik",
  "Mariam Noor", "Ali Raza", "Sara Ahmed", "Hira Shah",
  "Usman Tariq", "Areeba Khan", "Hamza Noor", "Mehak Ali"
];

// ========================================
// LOCAL STORAGE
// ========================================

function getData(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let users = getData("blogspace_users", []);
let currentUser = getData("blogspace_currentUser", null);
let blogs = getData("blogspace_blogs", []);
let savedBlogs = getData("blogspace_saved", []);
let activeCategory = "All";
let activePage = "explore";
let editingBlogId = null;
let currentArticleId = null;
let authMode = "login";

// ========================================
// HELPERS
// ========================================

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#039;"
  })[char]);
}

function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en", {
    day: "numeric", month: "short", year: "numeric"
  });
}

// ========================================
// UNIQUE IMAGE URL FOR EACH BLOG
// ========================================

function getBlogImage(category, number) {
  const seed = `blogspace-${category}-${number}`;
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/900/600`;
}

function imageFallback(blogId) {
  const seed = `blogspace-fallback-${blogId}`;
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/900/600`;
}

// ========================================
// GENERATE 204 SAMPLE BLOGS
// ========================================

function generateSampleBlogs() {
  const sampleBlogs = [];
  let number = 1;

  Object.keys(titles).forEach(category => {
    titles[category].forEach((title, index) => {
      const description = descriptions[index % descriptions.length];

      sampleBlogs.push({
        id: "sample-" + number,
        title,
        category,
        excerpt: description,
        content:
          title + "\n\n" + description +
          "\n\nWhy is this topic important?\n\n" +
          "Learning about new ideas helps us understand the world better. " +
          "Start with the basics, explore reliable information and keep practicing.\n\n" +
          "Practical tips:\n\n" +
          "• Take one step at a time.\n" +
          "• Keep learning and asking questions.\n" +
          "• Apply what you learn in everyday life.\n" +
          "• Share useful knowledge with others.\n\n" +
          "Remember that progress comes through patience and consistency. " +
          "Keep exploring, stay curious and never stop learning.",
        image: getBlogImage(category, number),
        author: sampleAuthors[index % sampleAuthors.length],
        date: new Date(Date.now() - number * 3600000).toISOString(),
        likes: (number * 7) % 85,
        views: (number * 19) % 500,
        comments: [],
        isSample: true
      });

      number++;
    });
  });

  return sampleBlogs;
}

function initializeBlogs() {
  const existing = getData("blogspace_blogs", null);

  if (!Array.isArray(existing) || existing.length === 0) {
    blogs = generateSampleBlogs();
    saveData("blogspace_blogs", blogs);
  } else {
    blogs = existing;
  }
}

// ========================================
// CATEGORIES
// ========================================

function renderCategories() {
  document.getElementById("categoryList").innerHTML =
    categories.map(category => `
      <button class="category-btn ${activeCategory === category ? "active" : ""}"
        data-category="${escapeHTML(category)}">
        ${escapeHTML(category)}
      </button>
    `).join("");
}

document.getElementById("categoryList").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderBlogs();
});

// ========================================
// BLOG CARDS
// ========================================

function createBlogCard(blog) {
  const isSaved = savedBlogs.includes(blog.id);

  return `
    <article class="blog-card">
      <div class="blog-image-wrap">
        <img class="blog-image"
          src="${escapeHTML(blog.image)}"
          alt="${escapeHTML(blog.title)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='${imageFallback(blog.id)}'">
        <span class="image-category">${escapeHTML(blog.category)}</span>
      </div>

      <div class="blog-card-content">
        <div class="blog-meta">
          <span>${formatDate(blog.date)}</span>
          <span>◉ ${Number(blog.views || 0)} views</span>
        </div>

        <h3 data-read="${escapeHTML(blog.id)}">${escapeHTML(blog.title)}</h3>
        <p>${escapeHTML(blog.excerpt)}</p>

        <div class="card-footer">
          <span class="author">By ${escapeHTML(blog.author)}</span>
          <div class="card-actions">
            <button class="action-btn" data-like="${escapeHTML(blog.id)}">
              ♡ ${Number(blog.likes || 0)}
            </button>
            <button class="action-btn ${isSaved ? "saved" : ""}"
              data-save="${escapeHTML(blog.id)}">
              ${isSaved ? "★" : "☆"}
            </button>
            <button class="action-btn" data-read="${escapeHTML(blog.id)}">Read →</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ========================================
// FILTER AND RENDER
// ========================================

function getVisibleBlogs() {
  const search = document.getElementById("searchInput").value.toLowerCase().trim();
  let result = [...blogs];

  if (activePage === "myblogs") {
    result = result.filter(blog =>
      !blog.isSample && currentUser && blog.userId === currentUser.id
    );
  }

  if (activePage === "saved") {
    result = result.filter(blog => savedBlogs.includes(blog.id));
  }

  if (activeCategory !== "All") {
    result = result.filter(blog => blog.category === activeCategory);
  }

  if (search) {
    result = result.filter(blog =>
      [blog.title, blog.category, blog.author, blog.excerpt]
        .some(value => String(value || "").toLowerCase().includes(search))
    );
  }

  const sort = document.getElementById("sortSelect").value;

  if (sort === "latest") result.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (sort === "oldest") result.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (sort === "popular") result.sort((a, b) => b.likes - a.likes);
  if (sort === "az") result.sort((a, b) => a.title.localeCompare(b.title));

  return result;
}

function renderBlogs() {
  const container = document.getElementById("blogContainer");
  const result = getVisibleBlogs();

  container.innerHTML = result.map(createBlogCard).join("");

  document.getElementById("resultsCount").textContent =
    `Showing ${result.length} article${result.length === 1 ? "" : "s"}`;

  document.getElementById("emptyState").classList.toggle("hidden", result.length !== 0);
  document.getElementById("totalBlogs").textContent = blogs.length + "+";
}

// ========================================
// PAGE NAVIGATION
// ========================================

function showPage(page) {
  activePage = page;
  activeCategory = "All";
  document.getElementById("searchInput").value = "";

  const titlesMap = {
    explore: ["Explore articles", "Find your next favourite read."],
    myblogs: ["My Blogs", "Manage the stories you have published."],
    saved: ["Saved Articles", "Your bookmarked stories in one place."],
    dashboard: ["Your Dashboard", "A quick look at your writing activity."]
  };

  if (!titlesMap[page]) page = "explore";

  document.getElementById("pageTitle").textContent = titlesMap[page][0];
  document.getElementById("pageSubtitle").textContent = titlesMap[page][1];

  document.getElementById("hero").classList.toggle("hidden", page !== "explore");
  document.querySelector(".stats").classList.toggle("hidden", page !== "explore");
  document.querySelector(".newsletter").classList.toggle("hidden", page !== "explore");

  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  if (page === "dashboard" && !currentUser) {
    showToast("Please login to view your dashboard.");
    openAuth("login");
    return;
  }

  if ((page === "myblogs" || page === "saved") && !currentUser) {
    showToast("Please login first.");
    openAuth("login");
    return;
  }

  if (page === "dashboard") {
    renderDashboard();
  } else {
    renderCategories();
    renderBlogs();
  }

  document.getElementById("nav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-link").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

// ========================================
// AUTHENTICATION DEMO
// ========================================

function openAuth(mode) {
  authMode = mode;

  document.getElementById("authTitle").textContent =
    mode === "login" ? "Welcome back" : "Create your account";

  document.getElementById("authDescription").textContent =
    mode === "login" ? "Login to continue your journey." : "Join BlogSpace and share your ideas.";

  document.getElementById("authSubmit").textContent =
    mode === "login" ? "Login" : "Create Account";

  document.getElementById("nameField").classList.toggle("hidden", mode === "login");
  document.getElementById("authName").required = mode === "signup";

  document.getElementById("authSwitch").innerHTML =
    mode === "login"
      ? `Don't have an account? <button type="button" id="switchAuth">Sign up</button>`
      : `Already have an account? <button type="button" id="switchAuth">Login</button>`;

  document.getElementById("authModal").classList.remove("hidden");

  document.getElementById("switchAuth").onclick = () =>
    openAuth(authMode === "login" ? "signup" : "login");
}

document.getElementById("loginBtn").addEventListener("click", () => openAuth("login"));
document.getElementById("signupBtn").addEventListener("click", () => openAuth("signup"));

document.getElementById("authForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("authName").value.trim();
  const email = document.getElementById("authEmail").value.trim().toLowerCase();
  const password = document.getElementById("authPassword").value;

  if (authMode === "signup") {
    if (!name) return showToast("Please enter your name.");
    if (users.some(user => user.email === email)) return showToast("This email is already registered.");

    const newUser = { id: makeId(), name, email, password };
    users.push(newUser);
    saveData("blogspace_users", users);

    currentUser = { id: newUser.id, name: newUser.name, email: newUser.email };
  } else {
    const foundUser = users.find(user =>
      user.email === email && user.password === password
    );

    if (!foundUser) return showToast("Incorrect email or password.");

    currentUser = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
  }

  saveData("blogspace_currentUser", currentUser);
  document.getElementById("authModal").classList.add("hidden");
  document.getElementById("authForm").reset();

  updateHeader();
  showToast(authMode === "login" ? "Welcome back!" : "Account created successfully!");

  if (activePage === "myblogs" || activePage === "saved") renderBlogs();
  if (activePage === "dashboard") renderDashboard();
});

function updateHeader() {
  const loginButton = document.getElementById("loginBtn");
  const signupButton = document.getElementById("signupBtn");

  if (currentUser) {
    loginButton.textContent = "Logout";
    signupButton.textContent = currentUser.name.split(" ")[0];
    loginButton.onclick = logoutUser;
    signupButton.onclick = () => showPage("dashboard");
  } else {
    loginButton.textContent = "Login";
    signupButton.textContent = "Get Started";
    loginButton.onclick = () => openAuth("login");
    signupButton.onclick = () => openAuth("signup");
  }
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("blogspace_currentUser");
  updateHeader();
  showPage("explore");
  showToast("You have logged out.");
}

// ========================================
// CREATE AND EDIT BLOGS
// ========================================

function renderBlogCategoryOptions() {
  document.getElementById("blogCategory").innerHTML =
    categories.filter(category => category !== "All").map(category =>
      `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`
    ).join("");
}

function openBlogModal(blog = null) {
  if (!currentUser) {
    showToast("Please login before writing a blog.");
    openAuth("login");
    return;
  }

  editingBlogId = blog ? blog.id : null;

  document.getElementById("blogModalTitle").textContent =
    blog ? "Edit your blog" : "Create a blog";

  document.getElementById("publishBtn").textContent =
    blog ? "Save Changes" : "Publish Blog";

  document.getElementById("blogTitle").value = blog?.title || "";
  document.getElementById("blogCategory").value = blog?.category || "Technology";
  document.getElementById("blogExcerpt").value = blog?.excerpt || "";
  document.getElementById("blogContent").value = blog?.content || "";
  document.getElementById("blogImage").value = blog && !blog.isSample ? blog.image : "";

  document.getElementById("blogModal").classList.remove("hidden");
}

document.getElementById("createBtn").addEventListener("click", () => openBlogModal());
document.getElementById("createBtnTop").addEventListener("click", () => openBlogModal());

document.getElementById("blogForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!currentUser) return showToast("Please login first.");

  const title = document.getElementById("blogTitle").value.trim();
  const category = document.getElementById("blogCategory").value;
  const excerpt = document.getElementById("blogExcerpt").value.trim();
  const content = document.getElementById("blogContent").value.trim();
  const imageUrl = document.getElementById("blogImage").value.trim();

  if (!title || !excerpt || !content) {
    return showToast("Please complete all required fields.");
  }

  if (editingBlogId) {
    const index = blogs.findIndex(blog =>
      blog.id === editingBlogId && blog.userId === currentUser.id
    );

    if (index === -1) return showToast("Blog not found.");

    blogs[index] = {
      ...blogs[index],
      title, category, excerpt, content,
      image: imageUrl || blogs[index].image
    };

    showToast("Blog updated successfully!");
  } else {
    const newBlog = {
      id: makeId(),
      userId: currentUser.id,
      title, category, excerpt, content,
      image: imageUrl || getBlogImage(category, makeId()),
      author: currentUser.name,
      date: new Date().toISOString(),
      likes: 0,
      views: 0,
      comments: [],
      isSample: false
    };

    blogs.unshift(newBlog);
    showToast("Your blog has been published!");
  }

  saveData("blogspace_blogs", blogs);
  document.getElementById("blogModal").classList.add("hidden");
  document.getElementById("blogForm").reset();
  editingBlogId = null;
  renderBlogs();
});

// ========================================
// LIKE AND SAVE
// ========================================

function likeBlog(id) {
  const blog = blogs.find(item => item.id === id);
  if (!blog) return;

  blog.likes = Number(blog.likes || 0) + 1;
  saveData("blogspace_blogs", blogs);
  renderBlogs();

  if (currentArticleId === id) updateArticleActions();
  showToast("You liked this article!");
}

function toggleSave(id) {
  if (!currentUser) {
    showToast("Login to save articles.");
    openAuth("login");
    return;
  }

  if (savedBlogs.includes(id)) {
    savedBlogs = savedBlogs.filter(item => item !== id);
    showToast("Article removed from saved list.");
  } else {
    savedBlogs.push(id);
    showToast("Article saved successfully!");
  }

  saveData("blogspace_saved", savedBlogs);
  renderBlogs();

  if (currentArticleId === id) updateArticleActions();
}

// ========================================
// OPEN ARTICLE
// ========================================

function openArticle(id) {
  const blog = blogs.find(item => item.id === id);
  if (!blog) return;

  currentArticleId = id;
  blog.views = Number(blog.views || 0) + 1;
  saveData("blogspace_blogs", blogs);

  const image = document.getElementById("articleImage");
  image.src = blog.image;
  image.onerror = function () {
    this.onerror = null;
    this.src = imageFallback(blog.id);
  };

  document.getElementById("articleCategory").textContent = blog.category;
  document.getElementById("articleTitle").textContent = blog.title;
  document.getElementById("articleMeta").textContent =
    `By ${blog.author} • ${formatDate(blog.date)} • ${blog.views} views`;

  document.getElementById("articleBody").textContent = blog.content;

  renderComments(blog);
  updateArticleActions();

  document.getElementById("articleModal").classList.remove("hidden");
  renderBlogs();
}

function updateArticleActions() {
  const blog = blogs.find(item => item.id === currentArticleId);
  if (!blog) return;

  document.getElementById("articleLike").textContent = `♡ Like (${blog.likes})`;
  document.getElementById("articleSave").textContent =
    savedBlogs.includes(blog.id) ? "★ Saved" : "☆ Save";
}

document.getElementById("articleLike").addEventListener("click", () => {
  if (currentArticleId) likeBlog(currentArticleId);
});

document.getElementById("articleSave").addEventListener("click", () => {
  if (currentArticleId) toggleSave(currentArticleId);
});

document.getElementById("articleShare").addEventListener("click", async () => {
  const blog = blogs.find(item => item.id === currentArticleId);
  if (!blog) return;

  const shareText = `${blog.title} - ${blog.excerpt}`;

  try {
    if (navigator.share) {
      await navigator.share({ title: blog.title, text: shareText, url: location.href });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareText);
      showToast("Article details copied!");
    } else {
      showToast("Sharing is not supported in this browser.");
    }
  } catch (error) {
    // Sharing cancelled by the user.
  }
});

// ========================================
// COMMENTS
// ========================================

function renderComments(blog) {
  const comments = blog.comments || [];

  document.getElementById("commentsList").innerHTML = comments.length
    ? comments.map(comment => `
        <div class="comment">
          <strong>${escapeHTML(comment.name)}</strong>
          ${escapeHTML(comment.text)}
        </div>
      `).join("")
    : `<p style="color:var(--muted);font-size:13px;">No comments yet. Be the first to comment!</p>`;
}

document.getElementById("commentForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!currentUser) {
    showToast("Login to comment.");
    openAuth("login");
    return;
  }

  const input = document.getElementById("commentInput");
  const text = input.value.trim();
  if (!text || !currentArticleId) return;

  const blog = blogs.find(item => item.id === currentArticleId);
  if (!blog) return;

  blog.comments = blog.comments || [];
  blog.comments.push({
    id: makeId(),
    name: currentUser.name,
    text,
    date: new Date().toISOString()
  });

  saveData("blogspace_blogs", blogs);
  input.value = "";
  renderComments(blog);
  showToast("Comment added!");
});

// ========================================
// CARD CLICK EVENTS
// ========================================

document.getElementById("blogContainer").addEventListener("click", event => {
  const readButton = event.target.closest("[data-read]");
  const likeButton = event.target.closest("[data-like]");
  const saveButton = event.target.closest("[data-save]");

  if (readButton) {
    openArticle(readButton.dataset.read);
    return;
  }

  if (likeButton) {
    likeBlog(likeButton.dataset.like);
    return;
  }

  if (saveButton) toggleSave(saveButton.dataset.save);
});

// ========================================
// DASHBOARD
// ========================================

function renderDashboard() {
  const myBlogs = blogs.filter(blog =>
    !blog.isSample && blog.userId === currentUser.id
  );

  const totalLikes = myBlogs.reduce((sum, blog) => sum + Number(blog.likes || 0), 0);
  const totalViews = myBlogs.reduce((sum, blog) => sum + Number(blog.views || 0), 0);

  document.getElementById("blogContainer").innerHTML = `
    <div class="blog-card blog-card-content">
      <span class="eyebrow">YOUR PROFILE</span>
      <h3>${escapeHTML(currentUser.name)}</h3>
      <p>${escapeHTML(currentUser.email)}</p>
    </div>
    <div class="blog-card blog-card-content">
      <span class="eyebrow">YOUR ARTICLES</span>
      <h3>${myBlogs.length}</h3>
      <p>Blogs published by you.</p>
    </div>
    <div class="blog-card blog-card-content">
      <span class="eyebrow">TOTAL LIKES</span>
      <h3>${totalLikes}</h3>
      <p>Likes received on your blogs.</p>
    </div>
    <div class="blog-card blog-card-content">
      <span class="eyebrow">TOTAL VIEWS</span>
      <h3>${totalViews}</h3>
      <p>Views on your published blogs.</p>
    </div>
    <div class="blog-card blog-card-content">
      <span class="eyebrow">SAVED ARTICLES</span>
      <h3>${savedBlogs.length}</h3>
      <p>Articles you have bookmarked.</p>
    </div>
  `;
}

// ========================================
// SEARCH AND SORT
// ========================================

document.getElementById("searchInput").addEventListener("input", renderBlogs);
document.getElementById("sortSelect").addEventListener("change", renderBlogs);

document.getElementById("clearFilters").addEventListener("click", () => {
  activeCategory = "All";
  document.getElementById("searchInput").value = "";
  document.getElementById("sortSelect").value = "latest";
  renderCategories();
  renderBlogs();
});

// ========================================
// DARK MODE
// ========================================

if (localStorage.getItem("blogspace_theme") === "dark") {
  document.body.classList.add("dark");
}

function updateThemeButton() {
  document.getElementById("themeBtn").textContent =
    document.body.classList.contains("dark") ? "☀" : "☾";
}

updateThemeButton();

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("blogspace_theme", isDark ? "dark" : "light");
  updateThemeButton();
});

// ========================================
// CLOSE MODALS
// ========================================

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.close).classList.add("hidden");
  });
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) modal.classList.add("hidden");
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal").forEach(modal => modal.classList.add("hidden"));
  }
});

// ========================================
// MOBILE MENU
// ========================================

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

// ========================================
// NEWSLETTER DEMO
// ========================================

document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  showToast("Thank you for subscribing!");
  event.target.reset();
});

// ========================================
// INITIALIZE
// ========================================

function initializeBlogSpace() {
  initializeBlogs();
  renderCategories();
  renderBlogCategoryOptions();
  renderBlogs();
  updateHeader();

  document.getElementById("year").textContent = new Date().getFullYear();
}

initializeBlogSpace();
