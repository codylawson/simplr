// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function openSimplr(response) {
    window.open(response.url, '', 'width=' + response.width + ', height=' + response.height + ', toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, top=top, left=left');
}

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, {text: 'simplr_get_dom'}, openSimplr);
});
