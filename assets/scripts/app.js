const elements = {
  navTabs: {
    browse: document.getElementById("nav__browse-tab"),
    browseButton: document.getElementById("nav__browse-tab-button"),
    search: document.getElementById("nav__search-tab"),
    searchButton: document.getElementById("nav__search-tab-button"),
  },
  output: {
    browse: document.getElementById("browse-output"),
    search: document.getElementById("search-output"),
  },
  pageNumberInput: document.getElementById("page-number"),
  sort: {
    browse: {
      mostPopular: document.getElementById("browse-sort__most-popular"),
      newestFirst: document.getElementById("browse-sort__newest-first"),
      oldestFirst: document.getElementById("browse-sort__oldest-first"),
    },
    search: {
      mostPopular: document.getElementById("search-sort__most-popular"),
      mostRelevant: document.getElementById("search-sort__most-relevant"),
      newestFirst: document.getElementById("search-sort__newest-first"),
      oldestFirst: document.getElementById("search-sort__oldest-first"),
    },
  },
};

var index = new FlexSearch.Document({
  encode: function (str) {
    const cjkItems = str.replace(/[\x00-\x7F]/g, "").split("");
    const asciiItems = str.toLowerCase().split(/\W+/);
    return cjkItems.concat(asciiItems);
  },
  document: {
    id: "idStr",
    index: ["content"],
    store: true,
  },
});

for (doc of documents) {
  index.add({
    idStr: doc.idStr,
    createdAt: doc.createdAt,
    content: doc.content,
    favouriteCount: doc.favouriteCount,
    retweetCount: doc.retweetCount,
  });
}

Array.from(document.getElementsByClassName("loading-message")).forEach(
  (element) => (element.hidden = true)
);

function sortDocuments(documentsToSort, sorting) {
  switch (sorting) {
    case "mostPopular":
      documentsToSort.sort(function (a, b) {
        return (
          +b.favouriteCount +
          +b.retweetCount -
          (+a.favouriteCount + +a.retweetCount)
        );
      });
      break;
    case "mostRelevant":
      documentsToSort.sort(function (a, b) {
        return a.index - b.index;
      });
      break;
    case "newestFirst":
      documentsToSort.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      break;
    case "oldestFirst":
      documentsToSort.sort(function (a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
      break;
  }
}

function displayActiveSort(context, sorting) {
  Object.values(elements.sort[context]).forEach((sortButtonElement) => {
    if (
      sortButtonElement === elements.sort[context][sorting] &&
      !sortButtonElement.classList.contains("active")
    ) {
      sortButtonElement.classList.add("active");
    } else if (
      sortButtonElement.classList.contains("active") &&
      sortButtonElement !== elements.sort[context][sorting]
    ) {
      sortButtonElement.classList.remove("active");
    }
  });
}

function generateDocumentHtml(document) {
  return `<article class="tweet">
    <div class="tweet__content">${document.content}</div>
    <div class="metadata">
      <div>${new Date(document.createdAt).toLocaleString()}</div>
      <div><a href="posts/${document.idStr}">permalink</a></div>
    </div>
    <div class="metadata">
      <div>Favourites: ${document.favouriteCount}</div>
      <div>Retweets: ${document.retweetCount}</div>
    </div>
  </article>`.replace(
    /\.\.\/\.\.\/assets\/tweet_media\//g,
    "assets/tweet_media/"
  );
}

let browseDocuments = documents.toSorted(function (a, b) {
  return (
    +b.favouriteCount + +b.retweetCount - (+a.favouriteCount + +a.retweetCount)
  );
});

function renderBrowseDocuments() {
  const output = browseDocuments
    .slice(browseIndex, browseIndex + pageSize)
    .map(generateDocumentHtml);
  elements.output.browse.innerHTML = output.join("");
}

function sortBrowseDocuments(sorting) {
  sortDocuments(browseDocuments, sorting);
  renderBrowseDocuments();
  displayActiveSort("browse", sorting);
}

let searchDocuments;

function renderSearchDocuments() {
  const output = searchDocuments.map(generateDocumentHtml);
  elements.output.search.innerHTML = output.join("");
}

function sortSearchDocuments(sorting) {
  sortDocuments(searchDocuments, sorting);
  renderSearchDocuments();
  displayActiveSort("search", sorting);
}

function onSearchChange(e) {
  searchDocuments = index.search(e.target.value, { enrich: true });
  if (searchDocuments.length > 0) {
    // limit search results to the top 100 by relevance
    searchDocuments = searchDocuments.slice(0, 100);
    // preserve original search result order in the 'index' variable since that is ordered by relevance
    searchDocuments = searchDocuments[0].result.map((item, index) => {
      let result = item.doc;
      result.index = index;
      return result;
    });
  }
  renderSearchDocuments();
}

document
  .getElementById("search-input")
  .addEventListener("input", onSearchChange);

function selectSearchTab() {
  elements.navTabs.browseButton.classList.remove("active");
  elements.navTabs.browse.hidden = true;
  elements.output.browse.hidden = true;
  elements.navTabs.searchButton.classList.add("active");
  elements.navTabs.search.hidden = false;
  elements.output.search.hidden = false;
}

function selectBrowseTab() {
  elements.navTabs.searchButton.classList.remove("active");
  elements.navTabs.search.hidden = true;
  elements.output.search.hidden = true;
  elements.navTabs.browseButton.classList.add("active");
  elements.navTabs.browse.hidden = false;
  elements.output.browse.hidden = false;
}

const pageSize = 50;
const pageMax = Math.floor(browseDocuments.length / pageSize) + 1;
document.getElementById("page-total").innerText = pageMax;
let page = 1;
let browseIndex = (page - 1) * pageSize;

function onPageNumChange(e) {
  page = e.target.value;
  browseIndex = (page - 1) * pageSize;
  renderBrowseDocuments();
}

function incrementPage() {
  if (parseInt(page) === pageMax) return;
  elements.pageNumberInput.value =
    parseInt(elements.pageNumberInput.value, 10) + 1;
  elements.pageNumberInput.dispatchEvent(new Event("input"));
}

function decrementPage() {
  if (parseInt(page) === 1) return;
  elements.pageNumberInput.value =
    parseInt(elements.pageNumberInput.value, 10) - 1;
  elements.pageNumberInput.dispatchEvent(new Event("input"));
}

const pageNumElement = document.getElementById("page-number");
pageNumElement.addEventListener("input", onPageNumChange);
pageNumElement.value = +page;
pageNumElement.max = pageMax;
pageNumElement.min = 1;

renderBrowseDocuments();
