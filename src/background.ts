(async () => {
  console.log('Background entry point', chrome);

  const updateBadge = async (windowId?: number) => {
    if (windowId !== undefined && windowId > 0) {
      const tabs = await chrome.tabs.query({ windowId });

      const badgeText = {
        text: tabs.length > 0 ? '' + tabs.length : '',
      };

      // update badge
      chrome.action.setBadgeText(badgeText);
    }
  };

  chrome.windows.onFocusChanged.addListener(updateBadge);
  // initial badge update
  const window = await chrome.windows.getLastFocused();
  updateBadge(window.id);
})();
