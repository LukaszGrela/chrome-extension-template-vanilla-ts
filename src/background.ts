(async () => {
  console.log('Background entry point', chrome);

  let currentWindowId = -2;

  const updateBadge = async () => {
    if (currentWindowId !== undefined && currentWindowId > 0) {
      const tabs = await chrome.tabs.query({ windowId: currentWindowId });

      const badgeText = {
        text: tabs.length > 0 ? '' + tabs.length : '',
      };

      // update badge
      chrome.action.setBadgeText(badgeText);
    }
  };

  const handleFocusChange = (windowId: number) => {
    if (windowId > 0) {
      currentWindowId = windowId;

      updateBadge();
    }
  };

  chrome.tabs.onAttached.addListener(updateBadge);
  chrome.tabs.onRemoved.addListener(updateBadge);
  chrome.tabs.onDetached.addListener(updateBadge);
  chrome.tabs.onCreated.addListener(updateBadge);

  chrome.windows.onFocusChanged.addListener(handleFocusChange);
  // initial badge update
  const window = await chrome.windows.getLastFocused();
  currentWindowId = window.id || -2;
  updateBadge();
})();
