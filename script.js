const contentArea = document.getElementById("content-area");
const navLinks = document.querySelectorAll(".nav-link");
let currentLang = 'en';
let currentPage = 'home';
let currentPostId = null;

const translations = {
    en: {
        home: "Home",
        member: "Members",
        publication: "Publications",  // 修改为publication
        projects: "Projects",
        featured: "Featured Posts",
        degree: "Degree",
        school: "School",
        direction: "Research Direction",
        returnHome: "← Return Publications",  // 修改
        readMore: "Read more..."
    },
    zh: {
        home: "主页",
        member: "成员",
        publication: "论文",  // 修改为publication
        projects: "项目",
        featured: "精选文章",
        degree: "学位",
        school: "学校",
        direction: "研究方向",
        returnHome: "← 返回论文总览",  // 修改
        readMore: "阅读全文..."
    },
    returnSubprojectMap: {
        evolution: {
            zh: "← 返回演化机器学习",
            en: "← Return to Evolutionary ML"
        },
        action: {
            zh: "← 返回动作识别",
            en: "← Return to Action Recognition"
        },
        compression: {
            zh: "← 返回压缩感知",
            en: "← Return to Compressed Sensing"
        }
    }
};

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.getElementById("lang-switch").textContent = currentLang === 'en' ? '中文' : 'English';
    
    // 修改这一行 - 旧代码
    // document.getElementById("site-title").textContent = currentLang === 'zh' ? '进化多媒体研究小组' : 'Evolution Multimedia Research Group';
    
    // 新代码 - 更新为EMC格式
    const siteTitle = document.getElementById("site-title");
    if (currentLang === 'zh') {
        siteTitle.innerHTML = `
            <div class="site-title-main">
                <span class="letter-e">E</span><span class="letter-m">M</span><span class="letter-c">C</span> 课题组
            </div>
            <div class="site-title-sub">进化多媒体计算</div>
        `;
    } else {
        siteTitle.innerHTML = `
            <div class="site-title-main">
                <span class="letter-e">E</span><span class="letter-m">M</span><span class="letter-c">C</span> RESEARCH GROUP
            </div>
            <div class="site-title-sub">Evolvable Multimedia Computing</div>
        `;
    }

    const navMap = ['home', 'member', 'publication', 'projects'];
    navMap.forEach((key, i) => {
        navLinks[i].textContent = translations[currentLang][key];
    });

    updateSidebarContent();

    if (currentPage === 'post' && currentPostId) {
        pages.post(currentPostId);
    } else if (currentPage === 'subproject' && currentPostId) {
        pages.subproject(currentPostId);
    } else if (currentPage === 'paper' && currentPostId) {
        pages.paper(currentPostId);
    } else if (pages[currentPage]) {
        pages[currentPage]();
    } else {
        pages.home();
    }
}
// function switchLanguage() {
//     currentLang = currentLang === 'en' ? 'zh' : 'en';
//     document.getElementById("lang-switch").textContent = currentLang === 'en' ? '中文' : 'English';
//     document.getElementById("site-title").textContent = currentLang === 'zh' ? '进化多媒体研究小组' : 'Evolution Multimedia Research Group';

//     const navMap = ['home', 'member', 'project'];
//     navMap.forEach((key, i) => {
//         navLinks[i].textContent = translations[currentLang][key];
//     });

//     updateSidebarContent();

//     if (currentPage === 'post' && currentPostId) {
//         pages.post(currentPostId);
//     } else if (currentPage === 'subproject' && currentPostId) {
//         pages.subproject(currentPostId);
//     } else if (currentPage === 'paper' && currentPostId) {
//         pages.paper(currentPostId);
//     } else if (pages[currentPage]) {
//         pages[currentPage]();
//     } else {
//         pages.home();
//     }
// }

function updateSidebarContent() {
    const sidebarText = {
        zh: {
            name: "周宇",
            instituteLabel: "单位：",
            institute: [
                "未来媒体计算研究院",
                "深圳大学"
            ],
            areaLabel: "研究方向：",
            areas: [
                "资源受限下的多模态信息处理",
                "智能优化算法与应用",
                "分布式进化学习系统"
            ]
        },
        en: {
            name: "Yu Zhou",
            instituteLabel: "Institute:",
            institute: [
                "Research Institute for Future Media Computing",
                "Shenzhen University"
            ],
            areaLabel: "Research Areas:",
            areas: [
                "Multimodal Information Processing under Resource Constraints",
                "Intelligent Optimization Algorithms and Applications",
                "Distributed Evolutionary Learning Systems"
            ]
        }
    };

    const langData = sidebarText[currentLang];
    document.getElementById("profile-name").textContent = langData.name;
    document.getElementById("profile-institute-label").innerHTML = `<strong>${langData.instituteLabel}</strong>`;
    document.getElementById("profile-area-label").innerHTML = `<strong>${langData.areaLabel}</strong>`;

    const instituteList = document.getElementById("profile-institute");
    instituteList.innerHTML = langData.institute.map(item => `<li>${item}</li>`).join("");

    const areaList = document.getElementById("profile-areas");
    areaList.innerHTML = langData.areas.map(item => `<li>${item}</li>`).join("");
}


document.getElementById("lang-switch").addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    switchLanguage();
    return false;
});

function renderMarkdown(mdText) {
    return window.marked ? marked.parse(mdText) : mdText;
}

async function loadMarkdownFile(url) {
    const res = await fetch(url);
    const md = await res.text();
    return renderMarkdown(md);
}

function fadeOutIn(callback) {
    contentArea.classList.add("fade-out");
    setTimeout(async () => {
        await callback();
        contentArea.classList.remove("fade-out");
    }, 300);
}

const pages = {
    home: async () => {
        currentPage = 'home';
        currentPostId = null;
        fadeOutIn(async () => {
            const file = currentLang === 'zh' ? "content/home.zh.md" : "content/home.md";
            const content = await loadMarkdownFile(file);
            contentArea.innerHTML = `<section class="publication-section">${content}</section>`;
        });
    },

    member: async () => {
        currentPage = 'member';
        currentPostId = null;
        fadeOutIn(async () => {
            const file = currentLang === 'zh' ? "content/member.zh.md" : "content/member.md";
            const content = await loadMarkdownFile(file);
            contentArea.innerHTML = `<section class="member-section"><h2>${translations[currentLang].member}</h2>${content}</section>`;
        });
    },

    publication: async () => {
        currentPage = 'publication';
        currentPostId = null;
        fadeOutIn(async () => {
            const file = currentLang === 'zh' ? "content/publication.zh.md" : "content/publication.md";
            const content = await loadMarkdownFile(file);
            contentArea.innerHTML = `<section class="publication-section"><h2>${translations[currentLang].publication}</h2>${content}</section>`;
        });
    },

    projects: async () => {
        currentPage = 'projects';
        currentPostId = null;
        fadeOutIn(async () => {
            const file = currentLang === 'zh' ? "content/projects.zh.md" : "content/projects.md";
            const content = await loadMarkdownFile(file);
            contentArea.innerHTML = `<section class="projects-section"><h2>${translations[currentLang].projects}</h2>${content}</section>`;
        });
    },

    post: async (postId) => {
        const post = posts.find(p => p.id === postId);
        if (!post) return;
        currentPage = 'post';
        currentPostId = postId;

        fadeOutIn(async () => {
            const file = post.contentFile?.[currentLang] || post.contentFile?.en;
            const content = await loadMarkdownFile(file);
            const title = post[`title_${currentLang}`] || post.title;

            contentArea.innerHTML = `
                <article class="post-card" style="box-shadow: none;">
                    <img src="${post.image}" alt="${title}" style="border-radius: 10px;">
                    <div class="post-content">
                        <h2>${title}</h2>
                        <p class="meta">${post.date} | ${post.category}</p>
                        ${content}
                        <a href="#home" class="back-button" style="display:inline-block;margin-top:2rem;color:#0066cc;font-weight:bold">${translations[currentLang].returnHome}</a>
                    </div>
                </article>
            `;
        });
    },

    paper: async (paperId) => {
        currentPage = 'paper';
        currentPostId = paperId;

        // 判断所属子模块（按 paperId 前缀）
        let subproject = "evolution"; // 默认
        if (paperId.startsWith("paper2-")) subproject = "action";
        else if (paperId.startsWith("paper3-")) subproject = "compression";

        const returnText = translations.returnSubprojectMap?.[subproject]?.[currentLang] || translations[currentLang].returnSubproject;

        fadeOutIn(async () => {
            const file = `content/论文/${paperId}.${currentLang}.md`;
            const content = await loadMarkdownFile(file);
            contentArea.innerHTML = `
                <article class="post-card" style="box-shadow: none;">
                    <div class="post-content">
                        ${content}
                        <a href="#subproject-${subproject}" class="back-button" style="display:inline-block;margin-top:2rem;color:#0066cc;font-weight:bold">
                            ${returnText}
                        </a>
                    </div>
                </article>
            `;
        });
    },

    subproject: async (subId) => {
        const data = subprojects[subId];
        if (!data) return;
        currentPage = 'subproject';
        currentPostId = subId;
        const file = data.file?.[currentLang] || data.file.zh;
        const title = data.title?.[currentLang] || data.title.zh;
        const content = await loadMarkdownFile(file);

        fadeOutIn(() => {
            contentArea.innerHTML = `
                <section class="publication-section">
                    <a href="#publication" style="color:#0066cc;font-weight:bold;">${translations[currentLang].returnHome}</a>
                    <h1>${title}</h1>
                    ${content}
                </section>
            `;
        });
    }
};

const subprojects = {
    evolution: {
        file: {
            zh: "content/网页/演化学习.zh.md",
            en: "content/网页/演化学习.md"
        },
        title: {
            zh: "演化机器学习",
            en: "Evolutionary Learning"
        }
    },
    action: {
        file: {
            zh: "content/网页/动作识别.zh.md",
            en: "content/网页/动作识别.md"
        },
        title: {
            zh: "动作识别",
            en: "Action Recognition"
        }
    },
    compression: {
        file: {
            zh: "content/网页/压缩感知.zh.md",
            en: "content/网页/压缩感知.md"
        },
        title: {
            zh: "压缩感知",
            en: "Compressed Sensing"
        }
    }
};

function renderPostList() {
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    contentArea.innerHTML = sortedPosts.map(post => {
        const title = post[`title_${currentLang}`] || post.title;
        const excerpt = post[`excerpt_${currentLang}`] || post.excerpt;
        return `
            <article class="post-card">
                <img src="${post.image}" alt="${title}">
                <div class="post-content">
                    <h2><a href="#post-${post.id}" class="post-link" data-id="${post.id}">${title}</a></h2>
                    <p class="meta">${post.date} | ${post.category}</p>
                    <p class="excerpt">${excerpt}</p>
                    <a href="#post-${post.id}" class="read-more post-link" data-id="${post.id}">${translations[currentLang].readMore}</a>
                </div>
            </article>
        `;
    }).join("");

    bindPostLinks();
}

function bindPostLinks() {
    const postLinks = document.querySelectorAll(".post-link");
    postLinks.forEach(link => {
        link.addEventListener("click", async (e) => {
            e.preventDefault();
            const postId = link.dataset.id;
            window.location.hash = `post-${postId}`;
            await pages.post(postId);
        });
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        const page = link.dataset.page;
        if (!page) return;
        e.preventDefault();
        window.location.hash = page;
        renderPageFromHash();
    });
});

async function renderPageFromHash() {
    const hash = window.location.hash.replace('#', '');

    if (hash.startsWith("post-")) {
        const postId = hash.replace("post-", "");
        await pages.post(postId);
    } else if (hash.startsWith("paper-")) {
        const paperId = hash.replace("paper-", "");
        await pages.paper(paperId);
    } else if (hash.startsWith("subproject-")) {
        const subId = hash.replace("subproject-", "");
        await pages.subproject(subId);
    } else if (pages[hash]) {
        await pages[hash]();
        navLinks.forEach(l => l.classList.remove("active"));
        document.querySelector(`.nav-link[data-page="${hash}"]`)?.classList.add("active");
    } else {
        await pages.home();
        navLinks.forEach(l => l.classList.remove("active"));
        document.querySelector(`.nav-link[data-page="home"]`)?.classList.add("active");
    }
}

renderPageFromHash();
window.addEventListener("hashchange", renderPageFromHash);
