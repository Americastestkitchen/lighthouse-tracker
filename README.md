# lighthouse-tracker

## Overview

lighthouse-tracker records Lighthouse data for ATK pages and provides a UI for viewing data.

This repo utilizes Lighthouse CI. Lighthouse CI is a suite of tools that make continuously running, saving, retrieving, and asserting against [Lighthouse](https://github.com/GoogleChrome/lighthouse) results as easy as possible.

## Creating a build

On the `build` branch, create a new commit with a comment using the year/month/date format `YYYYMMDD`. After pushing the branch, the GitHub Action should automatically trigger and run the Lighthouse tests. Tests will only be triggered upon commits to this branch.

## Modifying the tested pages

In `lighthouserc.js`, add or remove URL strings from the `url` array.
