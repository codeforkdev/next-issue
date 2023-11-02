# Issue: revalidatePath() does not target only specified route

## Reproduce:

1. Start the application using npm run dev
2. Take note of the timestamps on each page Home, results-1, results-2, results-3
3. On the home page click the "update results-1" button.

## Expectations:

After following these steps I would expect only the /results-1 page timestamp to update, but instead all routes including the home page's data(timestamp) is updated.

It appears revalidatePath("/results-1") is not just revalidating the /results-1 route but all routes within the app.
