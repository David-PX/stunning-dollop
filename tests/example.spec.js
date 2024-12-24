// @ts-check
import { test, expect } from '@playwright/test'

test('app shows random fact and image', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const text = await page.getByRole('paragraph')

  const textContent = await text.textContent()

  await expect(textContent?.length).toBeGreaterThan(0)
})
