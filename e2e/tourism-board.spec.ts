import { test, expect } from '@playwright/test'

test.describe('Tourism Board - Homepage', () => {
  test('renders hero section with title', async ({ page }) => {
    await page.goto('/')
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })

  test('renders stats section with numbers', async ({ page }) => {
    await page.goto('/')
    // Stats section should have at least one stat value
    const stats = page.locator('text=/\\d+/')
    await expect(stats.first()).toBeVisible()
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/attractions"]').first()).toBeVisible()
    await expect(page.locator('a[href="/events"]').first()).toBeVisible()
    await expect(page.locator('a[href="/itineraries"]').first()).toBeVisible()
    await expect(page.locator('a[href="/news"]').first()).toBeVisible()
  })
})

test.describe('Tourism Board - Attractions', () => {
  test('lists attractions', async ({ page }) => {
    await page.goto('/attractions')
    const heading = page.locator('h1')
    await expect(heading).toContainText('Attractions')
    // Should have at least one attraction card
    const cards = page.locator('h3')
    await expect(cards.first()).toBeVisible()
  })

  test('attraction detail page loads', async ({ page }) => {
    await page.goto('/attractions')
    // Click the first attraction link
    const firstCard = page.locator('a[href^="/attractions/"]').first()
    await firstCard.click()
    // Detail page should have title
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })
})

test.describe('Tourism Board - Events', () => {
  test('lists events', async ({ page }) => {
    await page.goto('/events')
    const heading = page.locator('h1')
    await expect(heading).toContainText('Events')
    const cards = page.locator('h3')
    await expect(cards.first()).toBeVisible()
  })

  test('event detail page loads', async ({ page }) => {
    await page.goto('/events')
    const firstCard = page.locator('a[href^="/events/"]').first()
    await firstCard.click()
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })
})

test.describe('Tourism Board - Itineraries', () => {
  test('lists itineraries', async ({ page }) => {
    await page.goto('/itineraries')
    const heading = page.locator('h1')
    await expect(heading).toContainText('Itineraries')
    const cards = page.locator('h3')
    await expect(cards.first()).toBeVisible()
  })

  test('itinerary detail page loads', async ({ page }) => {
    await page.goto('/itineraries')
    const firstCard = page.locator('a[href^="/itineraries/"]').first()
    await firstCard.click()
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })
})

test.describe('Tourism Board - News', () => {
  test('lists news articles', async ({ page }) => {
    await page.goto('/news')
    const heading = page.locator('h1')
    await expect(heading).toContainText('News')
    const cards = page.locator('h3')
    await expect(cards.first()).toBeVisible()
  })

  test('news detail page loads', async ({ page }) => {
    await page.goto('/news')
    const firstCard = page.locator('a[href^="/news/"]').first()
    await firstCard.click()
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })
})

test.describe('Tourism Board - Static Pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })
})
