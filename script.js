// =====================================
// BLOGSPACE - COMPLETE JAVASCRIPT
// HTML + CSS + JavaScript
// =====================================

const $ = (selector) => document.querySelector(selector);

const categories = [
  "Technology",
  "Education",
  "Lifestyle",
  "Fashion",
  "Food",
  "Travel",
  "Business",
  "Health",
  "Programming",
  "Islamic"
];

const blogIdeas = {
  Technology: [
    ["How Technology Is Changing Our Daily Lives", "Discover how modern technology is transforming the way we work, communicate and learn."],
    ["Artificial Intelligence for Beginners", "A simple introduction to artificial intelligence and its growing importance."],
    ["The Future of Smartphones", "Explore the latest smartphone trends and what the future may bring."],
    ["Why Digital Skills Matter Today", "Learn why digital skills are becoming essential in the modern world."],
    ["Technology and the Next Generation", "How young people can use technology to create a better future."],
    ["The Importance of Online Privacy", "Simple ways to protect your personal information online."],
    ["How Social Media Shapes Society", "Understand the positive and negative effects of social media."]
  ],

  Education: [
    ["The Power of Learning Every Day", "Small learning habits can create big changes in your life."],
    ["How to Become a Better Student", "Practical tips to improve your study routine and confidence."],
    ["Why Education Is Important for Everyone", "Education gives people knowledge, confidence and opportunities."],
    ["Smart Study Techniques That Work", "Explore effective techniques to make your study sessions productive."],
    ["The Benefits of Reading Books", "Reading improves knowledge, vocabulary and imagination."],
    ["Online Learning: A New Opportunity", "Discover how online education makes learning more accessible."],
    ["How to Prepare for Exams", "A simple guide to planning revision and managing exam stress."]
  ],

  Lifestyle: [
    ["Build a Better Morning Routine", "Start your day with simple habits that support a positive lifestyle."],
    ["Small Habits That Change Your Life", "Everyday habits can help you become a better version of yourself."],
    ["How to Manage Your Time", "Learn to organize your day and focus on what matters."],
    ["The Beauty of Simple Living", "Find happiness in simple moments and meaningful experiences."],
    ["Why Self Care Is Important", "Taking care of yourself helps you stay balanced and refreshed."],
    ["Creating a Peaceful Home", "Simple ideas to make your home feel comfortable and welcoming."],
    ["How to Stay Organized", "Easy organization tips for your daily life."]
  ],

  Fashion: [
    ["Simple Fashion Tips for Everyday", "Create comfortable and stylish looks with simple fashion choices."],
    ["How to Build a Capsule Wardrobe", "Learn how a few versatile pieces can create many outfits."],
    ["The Beauty of Traditional Fashion", "Explore the charm of traditional clothing and cultural style."],
    ["Choosing Colors That Match", "A beginner-friendly guide to combining colors in outfits."],
    ["Modest Fashion Inspiration", "Discover elegant and comfortable modest fashion ideas."],
    ["Fashion Trends and Personal Style", "Understand trends while keeping your own unique style."],
    ["How Accessories Complete an Outfit", "Small accessories can make a simple outfit look special."]
  ],

  Food: [
    ["Easy Breakfast Ideas for Busy Days", "Quick and delicious breakfast ideas to start your morning."],
    ["The Joy of Homemade Food", "Why homemade meals can bring comfort and happiness."],
    ["Simple Healthy Snacks", "Easy snack ideas for a balanced daily routine."],
    ["A Beginner's Guide to Baking", "Learn the basics of baking with simple kitchen tips."],
    ["Traditional Foods Around the World", "Explore delicious traditional dishes from different cultures."],
    ["How to Plan Weekly Meals", "Make your week easier with a simple meal-planning routine."],
    ["Refreshing Drinks for Summer", "Try simple and refreshing drink ideas for warm days."]
  ],

  Travel: [
    ["Why Traveling Opens Your Mind", "Travel introduces you to new places, people and experiences."],
    ["How to Plan Your First Trip", "A simple guide to planning a memorable journey."],
    ["Beautiful Places Worth Exploring", "Discover the joy of exploring nature and new destinations."],
    ["Travel on a Small Budget", "Helpful ways to enjoy a trip without spending too much."],
    ["The Magic of Mountain Destinations", "Explore the peaceful beauty of mountain landscapes."],
    ["Travel Photography for Beginners", "Capture memorable moments with simple photography tips."],
    ["Things to Pack Before a Journey", "A practical packing guide for your next adventure."]
  ],

  Business: [
    ["How to Start a Small Business", "Understand the first steps of turning an idea into a business."],
    ["The Importance of Personal Branding", "Build a clear and memorable identity for your work."],
    ["Smart Money Habits for Beginners", "Learn simple ways to manage your money wisely."],
    ["How to Become a Better Leader", "Explore the qualities that help people lead with confidence."],
    ["Digital Marketing Made Simple", "An introduction to promoting products and services online."],
    ["Turning Your Passion Into Work", "Discover how your interests can inspire a business idea."],
    ["Why Customer Experience Matters", "Good customer experiences help businesses build trust."]
  ],

  Health: [
    ["Healthy Habits for a Better Life", "Simple daily habits can support your overall well-being."],
    ["Why Drinking Water Matters", "Learn about the importance of staying hydrated."],
    ["The Benefits of Daily Walking", "Walking is a simple activity that can support an active lifestyle."],
    ["How to Improve Your Sleep Routine", "Build a relaxing routine for better sleep habits."],
    ["Healthy Eating for Beginners", "Understand the basics of balanced and varied meals."],
    ["Taking Breaks During Study", "Short breaks can help you refresh your mind."],
    ["The Importance of Mental Rest", "Give yourself time to relax and recharge."]
  ],

  Programming: [
    ["Your First Step Into Web Development", "Start learning how websites are created using HTML, CSS and JavaScript."],
    ["HTML Basics Every Beginner Should Know", "Understand the structure of a web page with HTML."],
    ["CSS Tips for Beautiful Websites", "Learn how CSS can make websites attractive and responsive."],
    ["JavaScript: Make Your Website Interactive", "Discover how JavaScript adds functionality to websites."],
    ["Why Every Developer Needs GitHub", "Learn how GitHub helps developers manage and share code."],
    ["Build Your First Portfolio Website", "A beginner-friendly guide to creating your developer portfolio."],
    ["Frontend vs Backend Development", "Understand the difference between frontend and backend development."]
  ],

  Islamic: [
    ["The Importance of Good Character", "Good manners and kindness are important parts of everyday life."],
    ["Finding Peace Through Prayer", "Reflect on the value of prayer and remembering Allah."],
    ["The Beauty of Helping Others", "Small acts of kindness can make a meaningful difference."],
    ["Making Time for Quran Reading", "Build a simple and consistent Quran reading routine."],
    ["The Value of Patience", "Patience helps us face life's challenges with strength."],
    ["Gratitude in Everyday Life", "Remembering our blessings can bring peace to the heart."],
    ["The Importance of Honesty", "Honesty builds trust and strengthens relationships."]
  ]
};

// =====================================
// STORAGE
// =====================================

function getData(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let blogs = [];
let users = getData("blogspace_users", []);
let currentUser = getData("blogspace_currentUser", null);
let savedBlogs = getData("blogspace_saved", []);
let activePage = "home";
let activeCategory = "All";
let currentArticleId = null;
let editingBlogId = null;
let authMode = "signup";

// =====================================
// SAMPLE BLOG GENERATOR - 70 BLOGS
// =====================================

function generateSampleBlogs() {
  const result = [];
  let number = 1;

  categories.forEach((category, categoryIndex) => {
    blogIdeas[category].forEach((idea, index) => {
      const id = `sample-${number}`;

      result.push({
        id,
        title: idea[0],
        excerpt: idea[1],
        content:
          `${idea[1]}\n\n` +
          `In today's world, it is important to keep learning and discovering new ideas. ` +
          `Every small step can help us improve our knowledge and understanding.\n\n` +
          `Start with simple actions, stay consistent and do not be afraid to try something new. ` +
          `With time, practice and patience, you can make meaningful progress.\n\n` +
          `Remember that every journey begins with one small step. Keep learning, keep growing and keep sharing your ideas.`,
        category,
        image: `https://picsum.photos/seed/blogspace-${categoryIndex}-${index}/900/600`,
        author: "BlogSpace Editorial",
        date: new Date(Date.now() - number * 86400000).toISOString(),
        likes: [],
        views: 0,
        comments: [],
        isSample: true
      });

      number++;
    });
  });

  return result;
}

function initializeBlogs() {
  const oldBlogs = getData("blogspace_blogs", []);
  const sampleVersion = localStorage.getItem("blogspace_sample_version");

  if (sampleVersion !== "70-v1") {
    const userBlogs = Array.isArray(oldBlogs)
      ? oldBlogs.filter(blog => !blog.isSample)
      : [];

    blogs = [...userBlogs, ...generateSampleBlogs()];
    saveData("blogspace_blogs", blogs);
    localStorage.setItem("blogspace_sample_version", "70-v1");
  } else {
    blogs = Array.isArray(oldBlogs) ? oldBlogs : [];
  }
}

function saveBlogs() {
  saveData("blogspace_blogs", blogs);
}

// =====================================
// HELPERS
// =====================================

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function getBlog(id) {
  return blogs.find(blog => String(blog.id) === String(id));
}

function getImage(blog) {
  return blog.image ||
    `https://picsum.photos/seed/blogspace-fallback-${encodeURIComponent(blog.id)}/900/600`;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function openModal(id) {
  $("#" + id).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.add("hidden");

  if (!document.querySelector(".modal:not(.hidden)")) {
    document.body.style.overflow = "";
  }
}

// =====================================
// NAVIGATION
// =====================================

function showPage(page) {
  activePage = page;
  activeCategory = "All";

  $("#searchInput").value = "";

  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  $("#nav").classList.remove("open");

  $("#hero").classList.toggle("hidden",
    !["home", "explore"].includes(page));

  document.querySelector(".stats").classList.toggle("hidden",
    !["home", "explore"].includes(page));

  document.querySelector(".newsletter").classList.toggle("hidden",
    !["home", "explore"].includes(page));

  const headings = {
    home: ["Latest Stories", "A little inspiration for your day."],
    explore: ["Explore All Blogs", "Discover all 70 stories from different categories."],
    myblogs: ["My Blogs", "Manage the stories you have published."],
    saved: ["Saved Stories", "Your favourite blogs in one place."],
    dashboard: ["My Dashboard", "Your personal BlogSpace overview."]
  };

  $("#pageTitle").textContent = headings[page][0];
  $("#pageSubtitle").textContent = headings[page][1];

  if (page === "dashboard") {
    renderDashboard();
    return;
  }

  renderCategories();
  renderBlogs();
}

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");

  if (pageButton) {
    event.preventDefault();
    showPage(pageButton.dataset.page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// =====================================
// CATEGORIES
// =====================================

function renderCategories() {
  const allCategories = ["All", ...categories];

  $("#categoryList").innerHTML = allCategories.map(category => `
    <button
      class="category-btn ${activeCategory === category ? "active" : ""}"
      data-category="${escapeHTML(category)}">
      ${escapeHTML(category)}
    </button>
  `).join("");
}

$("#categoryList").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderCategories();
  renderBlogs();
});

// =====================================
// BLOG FILTERING AND DISPLAY
// =====================================

function getVisibleBlogs() {
  let result = [...blogs];

  if (activePage === "home") {
    result = result.filter(blog => blog.isSample);
  }

  if (activePage === "myblogs") {
    result = result.filter(blog =>
      !blog.isSample &&
      currentUser &&
      blog.userEmail === currentUser.email
    );
  }

  if (activePage === "saved") {
    result = result.filter(blog => savedBlogs.includes(blog.id));
  }

  if (activeCategory !== "All") {
    result = result.filter(blog => blog.category === activeCategory);
  }

  const search = $("#searchInput").value.toLowerCase().trim();

  if (search) {
    result = result.filter(blog =>
      blog.title.toLowerCase().includes(search) ||
      blog.excerpt.toLowerCase().includes(search) ||
      blog.category.toLowerCase().includes(search) ||
      blog.author.toLowerCase().includes(search)
    );
  }

  const sort = $("#sortSelect").value;

  if (sort === "latest") {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sort === "oldest") {
    result.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  if (sort === "popular") {
    result.sort((a, b) => b.likes.length - a.likes.length);
  }

  if (sort === "az") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (activePage === "home") {
    result = result.slice(0, 15);
  }

  if (activePage === "explore") {
    result = result.slice(0, 70);
  }

  return result;
}

function renderBlogs() {
  const result = getVisibleBlogs();

  $("#resultsCount").textContent =
    `Showing ${result.length} ${result.length === 1 ? "story" : "stories"}`;

  $("#blogContainer").innerHTML = result.map(blog => `
    <article class="blog-card">
      <img
        class="blog-image"
        src="${escapeHTML(getImage(blog))}"
        alt="${escapeHTML(blog.title)}"
        loading="lazy"
        onerror="this.src='https://picsum.photos/seed/${encodeURIComponent(blog.id)}-fallback/900/600'">

      <div class="blog-info">
        <span class="blog-category">${escapeHTML(blog.category)}</span>

        <h3>${escapeHTML(blog.title)}</h3>

        <p>${escapeHTML(blog.excerpt)}</p>

        <div class="blog-meta">
          <span>By ${escapeHTML(blog.author)}</span>
          <span>${formatDate(blog.date)}</span>
        </div>

        <div class="blog-card-actions">
          <button class="read-btn" data-read="${escapeHTML(blog.id)}">
            Read Story →
          </button>

          <div>
            <button class="small-action" data-like="${escapeHTML(blog.id)}" title="Like">
              ${blog.likes.length ? "♥" : "♡"} ${blog.likes.length}
            </button>

            <button class="small-action" data-save="${escapeHTML(blog.id)}" title="Save">
              ${savedBlogs.includes(blog.id) ? "★" : "☆"}
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  $("#emptyState").classList.toggle("hidden", result.length > 0);
  $("#blogContainer").classList.toggle("hidden", result.length === 0);
}

$("#searchInput").addEventListener("input", renderBlogs);
$("#sortSelect").addEventListener("change", renderBlogs);

$("#clearFilters").addEventListener("click", () => {
  activeCategory = "All";
  $("#searchInput").value = "";
  $("#sortSelect").value = "latest";
  renderCategories();
  renderBlogs();
});

// =====================================
// BLOG CARD ACTIONS
// =====================================

$("#blogContainer").addEventListener("click", event => {
  const readButton = event.target.closest("[data-read]");
  const likeButton = event.target.closest("[data-like]");
  const saveButton = event.target.closest("[data-save]");

  if (readButton) {
    openArticle(readButton.dataset.read);
  }

  if (likeButton) {
    toggleLike(likeButton.dataset.like);
  }

  if (saveButton) {
    toggleSave(saveButton.dataset.save);
  }
});

function toggleLike(id) {
  const blog = getBlog(id);
  if (!blog) return;

  if (!currentUser) {
    showToast("Please login to like a blog.");
    openAuth("login");
    return;
  }

  if (!Array.isArray(blog.likes)) blog.likes = [];

  const alreadyLiked = blog.likes.includes(currentUser.email);

  if (alreadyLiked) {
    blog.likes = blog.likes.filter(email => email !== currentUser.email);
    showToast("Like removed.");
  } else {
    blog.likes.push(currentUser.email);
    showToast("You liked this story!");
  }

  saveBlogs();
  renderBlogs();

  if (currentArticleId === id) {
    updateArticleButtons();
  }
}

function toggleSave(id) {
  if (!currentUser) {
    showToast("Please login to save stories.");
    openAuth("login");
    return;
  }

  if (savedBlogs.includes(id)) {
    savedBlogs = savedBlogs.filter(savedId => savedId !== id);
    showToast("Removed from saved stories.");
  } else {
    savedBlogs.push(id);
    showToast("Story saved successfully!");
  }

  saveData("blogspace_saved", savedBlogs);
  renderBlogs();

  if (currentArticleId === id) {
    updateArticleButtons();
  }
}

// =====================================
// ARTICLE VIEW
// =====================================

function openArticle(id) {
  const blog = getBlog(id);
  if (!blog) return;

  currentArticleId = id;
  blog.views = (blog.views || 0) + 1;
  saveBlogs();

  $("#articleImage").src = getImage(blog);
  $("#articleCategory").textContent = blog.category;
  $("#articleTitle").textContent = blog.title;

  $("#articleMeta").textContent =
    `By ${blog.author} • ${formatDate(blog.date)} • ${blog.views} views`;

  $("#articleBody").textContent = blog.content;

  renderComments();
  updateArticleButtons();

  openModal("articleModal");
}

function updateArticleButtons() {
  const blog = getBlog(currentArticleId);
  if (!blog) return;

  const liked = currentUser &&
    blog.likes.includes(currentUser.email);

  const saved = savedBlogs.includes(blog.id);

  $("#articleLike").textContent = liked ? "♥ Liked" : "♡ Like";
  $("#articleSave").textContent = saved ? "★ Saved" : "☆ Save";
}

$("#articleLike").addEventListener("click", () => {
  if (currentArticleId) toggleLike(currentArticleId);
});

$("#articleSave").addEventListener("click", () => {
  if (currentArticleId) toggleSave(currentArticleId);
});

$("#articleShare").addEventListener("click", async () => {
  const blog = getBlog(currentArticleId);
  if (!blog) return;

  const shareText = `${blog.title}\n${blog.excerpt}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: blog.title,
        text: shareText
      });
    } catch (error) {
      // User cancelled sharing.
    }
  } else if (navigator.clipboard) {
    await navigator.clipboard.writeText(shareText);
    showToast("Blog details copied!");
  } else {
    showToast("Sharing is not supported in this browser.");
  }
});

// =====================================
// COMMENTS
// =====================================

function renderComments() {
  const blog = getBlog(currentArticleId);
  if (!blog) return;

  if (!Array.isArray(blog.comments)) blog.comments = [];

  $("#commentsList").innerHTML = blog.comments.length
    ? blog.comments.map(comment => `
        <div class="comment-item">
          <strong>${escapeHTML(comment.name)}</strong>
          <p>${escapeHTML(comment.text)}</p>
        </div>
      `).join("")
    : `<p style="color:var(--muted);font-size:13px;">No comments yet. Be the first!</p>`;
}

$("#commentForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!currentUser) {
    showToast("Please login to comment.");
    openAuth("login");
    return;
  }

  const blog = getBlog(currentArticleId);
  const text = $("#commentInput").value.trim();

  if (!blog || !text) return;

  if (!Array.isArray(blog.comments)) blog.comments = [];

  blog.comments.push({
    name: currentUser.name,
    text
  });

  saveBlogs();
  $("#commentInput").value = "";
  renderComments();

  showToast("Comment added!");
});

// =====================================
// AUTHENTICATION - DEMO ONLY
// =====================================

function openAuth(mode) {
  authMode = mode;

  const signup = mode === "signup";

  $("#authTitle").textContent =
    signup ? "Create your account" : "Welcome back";

  $("#authDescription").textContent =
    signup
      ? "Join our community of creative minds."
      : "Login to continue to BlogSpace.";

  $("#authSubmit").textContent =
    signup ? "Create Account" : "Login";

  $("#nameField").classList.toggle("hidden", !signup);
  $("#authName").required = signup;

  $("#authSwitch").innerHTML = signup
    ? `Already have an account? <button type="button">Login</button>`
    : `Don't have an account? <button type="button">Sign Up</button>`;

  openModal("authModal");
}

$("#loginBtn").addEventListener("click", () => {
  if (currentUser) {
    currentUser = null;
    saveData("blogspace_currentUser", null);
    updateHeader();
    showPage(activePage);
    showToast("You have logged out.");
  } else {
    openAuth("login");
  }
});

$("#signupBtn").addEventListener("click", () => {
  openAuth("signup");
});

$("#authSwitch").addEventListener("click", () => {
  openAuth(authMode === "signup" ? "login" : "signup");
});

$("#authForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#authName").value.trim();
  const email = $("#authEmail").value.trim().toLowerCase();
  const password = $("#authPassword").value;

  if (authMode === "signup") {
    if (!name) {
      showToast("Please enter your name.");
      return;
    }

    if (users.some(user => user.email === email)) {
      showToast("This email is already registered.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveData("blogspace_users", users);

    currentUser = { name, email };
    saveData("blogspace_currentUser", currentUser);

    closeModal($("#authModal"));
    $("#authForm").reset();
    updateHeader();
    renderBlogs();

    showToast("Account created successfully!");
  } else {
    const user = users.find(user =>
      user.email === email && user.password === password
    );

    if (!user) {
      showToast("Incorrect email or password.");
      return;
    }

    currentUser = { name: user.name, email: user.email };
    saveData("blogspace_currentUser", currentUser);

    closeModal($("#authModal"));
    $("#authForm").reset();
    updateHeader();
    renderBlogs();

    showToast(`Welcome back, ${user.name}!`);
  }
});

function updateHeader() {
  if (currentUser) {
    $("#loginBtn").textContent = "Logout";
    $("#signupBtn").textContent = currentUser.name.split(" ")[0];
  } else {
    $("#loginBtn").textContent = "Login";
    $("#signupBtn").textContent = "Get Started";
  }
}

// =====================================
// CREATE AND EDIT BLOG
// =====================================

function fillBlogCategories() {
  $("#blogCategory").innerHTML = categories.map(category => `
    <option value="${escapeHTML(category)}">${escapeHTML(category)}</option>
  `).join("");
}

function openBlogModal(blog = null) {
  if (!currentUser) {
    showToast("Please login before writing a blog.");
    openAuth("login");
    return;
  }

  editingBlogId = blog ? blog.id : null;

  $("#blogModalTitle").textContent =
    blog ? "Edit your story" : "Write a new story";

  $("#publishBtn").textContent =
    blog ? "Update Blog" : "Publish Blog";

  $("#blogTitle").value = blog?.title || "";
  $("#blogCategory").value = blog?.category || "Technology";
  $("#blogExcerpt").value = blog?.excerpt || "";
  $("#blogContent").value = blog?.content || "";
  $("#blogImage").value = blog?.image || "";

  openModal("blogModal");
}

$("#createBtn").addEventListener("click", () => openBlogModal());
$("#createBtnTop").addEventListener("click", () => openBlogModal());

$("#blogForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!currentUser) {
    showToast("Please login first.");
    return;
  }

  const title = $("#blogTitle").value.trim();
  const category = $("#blogCategory").value;
  const excerpt = $("#blogExcerpt").value.trim();
  const content = $("#blogContent").value.trim();
  const image = $("#blogImage").value.trim();

  if (!title || !excerpt || !content) {
    showToast("Please fill all required fields.");
    return;
  }

  if (editingBlogId) {
    const blog = getBlog(editingBlogId);

    if (!blog || blog.userEmail !== currentUser.email) {
      showToast("You cannot edit this blog.");
      return;
    }

    blog.title = title;
    blog.category = category;
    blog.excerpt = excerpt;
    blog.content = content;
    blog.image = image;
    blog.updatedAt = new Date().toISOString();

    showToast("Your blog has been updated!");
  } else {
    const newBlog = {
      id: "user-" + Date.now(),
      title,
      category,
      excerpt,
      content,
      image,
      author: currentUser.name,
      userEmail: currentUser.email,
      date: new Date().toISOString(),
      likes: [],
      views: 0,
      comments: [],
      isSample: false
    };

    blogs.unshift(newBlog);
    showToast("Your blog has been published!");
  }

  saveBlogs();
  closeModal($("#blogModal"));
  $("#blogForm").reset();

  showPage("myblogs");
});

// =====================================
// MY BLOGS - EDIT / DELETE
// =====================================

function renderMyBlogManagement() {
  const myBlogs = blogs.filter(blog =>
    !blog.isSample &&
    currentUser &&
    blog.userEmail === currentUser.email
  );

  $("#blogContainer").innerHTML = myBlogs.map(blog => `
    <article class="blog-card">
      <img class="blog-image" src="${escapeHTML(getImage(blog))}" alt="Blog image">
      <div class="blog-info">
        <span class="blog-category">${escapeHTML(blog.category)}</span>
        <h3>${escapeHTML(blog.title)}</h3>
        <p>${escapeHTML(blog.excerpt)}</p>
        <div class="blog-meta">
          <span>${blog.views || 0} views</span>
          <span>${blog.likes.length} likes</span>
        </div>
        <div class="blog-card-actions">
          <button class="read-btn" data-read="${escapeHTML(blog.id)}">Read →</button>
          <div>
            <button class="small-action" data-edit="${escapeHTML(blog.id)}">✎</button>
            <button class="small-action" data-delete="${escapeHTML(blog.id)}">🗑</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  $("#resultsCount").textContent = `You have ${myBlogs.length} published blogs`;
  $("#emptyState").classList.toggle("hidden", myBlogs.length > 0);
  $("#blogContainer").classList.toggle("hidden", myBlogs.length === 0);
}

// =====================================
// DASHBOARD
// =====================================

function renderDashboard() {
  const myBlogs = currentUser
    ? blogs.filter(blog =>
        !blog.isSample && blog.userEmail === currentUser.email
      )
    : [];

  const totalLikes = myBlogs.reduce(
    (total, blog) => total + blog.likes.length, 0
  );

  const totalViews = myBlogs.reduce(
    (total, blog) => total + (blog.views || 0), 0
  );

  const mySaved = currentUser ? savedBlogs.length : 0;

  $("#categoryList").innerHTML = "";
  $("#toolbar").classList.add("hidden");
  $("#resultsCount").textContent = "";
  $("#clearFilters").classList.add("hidden");

  $("#blogContainer").classList.remove("hidden");
  $("#emptyState").classList.add("hidden");

  $("#blogContainer").innerHTML = `
    <div class="dashboard-card">
      <span class="eyebrow">YOUR BLOGSPACE</span>
      <h2>Hello, ${currentUser ? escapeHTML(currentUser.name) : "Guest"}!</h2>
      <p style="color:var(--muted);margin:10px 0 20px;">
        ${currentUser ? "Welcome to your personal dashboard." : "Login to manage your blogs and saved stories."}
      </p>

      <div class="stats">
        <div><strong>${myBlogs.length}</strong><span>My Blogs</span></div>
        <div><strong>${totalLikes}</strong><span>Total Likes</span></div>
        <div><strong>${totalViews}</strong><span>Total Views</span></div>
      </div>

      <div style="margin-top:25px;">
        <button class="btn btn-primary" id="dashboardCreate">＋ Write a Blog</button>
        <button class="btn btn-outline" id="dashboardSaved">☆ Saved Blogs (${mySaved})</button>
      </div>
    </div>
  `;

  $("#dashboardCreate").addEventListener("click", () => openBlogModal());

  $("#dashboardSaved").addEventListener("click", () => showPage("saved"));
}

// =====================================
// MY BLOGS / SAVED PAGE RENDERING
// =====================================

const originalRenderBlogs = renderBlogs;

function renderPageBlogs() {
  if (activePage === "myblogs") {
    if (!currentUser) {
      $("#blogContainer").innerHTML = "";
      $("#emptyState").classList.remove("hidden");
      $("#emptyState").querySelector("h3").textContent = "Login required";
      $("#emptyState").querySelector("p").textContent =
        "Login to see the blogs you have published.";
      $("#resultsCount").textContent = "";
      return;
    }

    renderMyBlogManagement();
    return;
  }

  if (activePage === "saved" && !currentUser) {
    $("#blogContainer").innerHTML = "";
    $("#emptyState").classList.remove("hidden");
    $("#emptyState").querySelector("h3").textContent = "Login required";
    $("#emptyState").querySelector("p").textContent =
      "Login to see your saved stories.";
    $("#resultsCount").textContent = "";
    return;
  }

  originalRenderBlogs();
}

// Use the correct renderer when changing page.
renderBlogs = renderPageBlogs;

// =====================================
// EDIT AND DELETE EVENT HANDLERS
// =====================================

$("#blogContainer").addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit]");
  const deleteButton = event.target.closest("[data-delete]");

  if (editButton) {
    const blog = getBlog(editButton.dataset.edit);
    if (blog) openBlogModal(blog);
  }

  if (deleteButton) {
    const id = deleteButton.dataset.delete;
    const blog = getBlog(id);

    if (!blog || !currentUser || blog.userEmail !== currentUser.email) {
      showToast("You cannot delete this blog.");
      return;
    }

    const confirmed = confirm("Are you sure you want to delete this blog?");

    if (confirmed) {
      blogs = blogs.filter(item => item.id !== id);
      savedBlogs = savedBlogs.filter(item => item !== id);

      saveBlogs();
      saveData("blogspace_saved", savedBlogs);

      renderBlogs();
      showToast("Blog deleted successfully.");
    }
  }
});

// =====================================
// MODAL CLOSE
// =====================================

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    closeModal(button.closest(".modal"));
  });
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal:not(.hidden)").forEach(modal => {
      closeModal(modal);
    });
  }
});

// =====================================
// DARK MODE
// =====================================

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  $("#themeBtn").textContent = theme === "dark" ? "☀" : "☾";
  localStorage.setItem("blogspace_theme", theme);
}

$("#themeBtn").addEventListener("click", () => {
  const dark = document.body.classList.contains("dark");
  setTheme(dark ? "light" : "dark");
});

// =====================================
// MOBILE MENU
// =====================================

$("#menuBtn").addEventListener("click", () => {
  $("#nav").classList.toggle("open");
});

// =====================================
// NEWSLETTER
// =====================================

$("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();

  const email = event.target.querySelector("input").value.trim();

  if (email) {
    showToast("Thank you for subscribing!");
    event.target.reset();
  }
});

// =====================================
// INITIALIZE APP
// =====================================

function initApp() {
  initializeBlogs();
  fillBlogCategories();

  $("#year").textContent = new Date().getFullYear();

  const theme = localStorage.getItem("blogspace_theme") || "light";
  setTheme(theme);

  updateHeader();
  showPage("home");

  $("#totalBlogs").textContent = "70";
}

initApp();
