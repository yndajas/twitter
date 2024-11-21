const elements = {
  browse: document.getElementById("browse"),
  browseOutput: document.getElementById("browse-output"),
  browseTab: document.getElementById("browse-tab"),
  search: document.getElementById("search"),
  searchOutput: document.getElementById("search-output"),
  searchTab: document.getElementById("search-tab"),
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
    id: "id_str",
    index: ["full_text"],
    store: true,
  },
});

for (doc of documents) {
  index.add({
    id_str: doc.id_str,
    created_at: doc.created_at,
    full_text: doc.full_text,
    favorite_count: doc.favorite_count,
    retweet_count: doc.retweet_count,
  });
}

document.getElementById("loading").hidden = true;

function sortDocuments(documentsToSort, sorting) {
  switch (sorting) {
    case "mostPopular":
      documentsToSort.sort(function (a, b) {
        return (
          +b.favorite_count +
          +b.retweet_count -
          (+a.favorite_count + +a.retweet_count)
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
        return new Date(b.created_at) - new Date(a.created_at);
      });
      break;
    case "oldestFirst":
      documentsToSort.sort(function (a, b) {
        return new Date(a.created_at) - new Date(b.created_at);
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

let browseDocuments = documents.toSorted(function (a, b) {
  return (
    +b.favorite_count +
    +b.retweet_count -
    (+a.favorite_count + +a.retweet_count)
  );
});

function renderBrowseDocuments() {
  const output = browseDocuments
    .slice(browseIndex, browseIndex + pageSize)
    .map((item) =>
      `<p class="search_item"><div class="search_link"><a href="yndajas/status/${
        item.id_str
      }">link</a></div> <div class="search_text">${
        item.full_text
      }</div><div class="search_time">${new Date(
        item.created_at
      ).toLocaleString()}</div><hr class="search_divider" /></p>`.replace(
        /\.\.\/\.\.\/tweets_media\//g,
        "yndajas/tweets_media/"
      )
    );
  elements.browseOutput.innerHTML = `${output.join(
    ""
  )}<a href="#tabs">top &uarr;</a>`;
}

function sortBrowseDocuments(sorting) {
  sortDocuments(browseDocuments, sorting);
  renderBrowseDocuments();
  displayActiveSort("browse", sorting);
}

let searchDocuments;

function renderSearchDocuments() {
  const output = searchDocuments.map((item) =>
    `<p class="search_item"><div class="search_link"><a href="yndajas/status/${
      item.id_str
    }">link</a></div> <div class="search_text">${
      item.full_text
    }</div><div class="search_time">${new Date(
      item.created_at
    ).toLocaleString()}</div><hr class="search_divider" /></p>`.replace(
      /\.\.\/\.\.\/tweets_media\//g,
      "yndajas/tweets_media/"
    )
  );
  elements.searchOutput.innerHTML = output.join("");
  if (searchDocuments.length > 0) {
    elements.searchOutput.innerHTML += '<a href="#tabs">top &uarr;</a>';
  }
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
  elements.searchTab.classList.add("active");
  elements.browseTab.classList.remove("active");
  elements.browse.hidden = true;
  elements.search.hidden = false;
}

function selectBrowseTab() {
  elements.browseTab.classList.add("active");
  elements.searchTab.classList.remove("active");
  elements.search.hidden = true;
  elements.browse.hidden = false;
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

const pageNumElement = document.getElementById("page-num");
pageNumElement.addEventListener("input", onPageNumChange);
pageNumElement.value = +page;
pageNumElement.max = pageMax;
pageNumElement.min = 1;

renderBrowseDocuments();
