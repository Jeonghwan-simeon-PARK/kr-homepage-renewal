---
name: data
description: Create and manage JSON data files and schemas for the HicareNet website
user_invocable: true
---

# /data - JSON Data Manager

Create, update, and validate JSON data files for the HicareNet website.

## Usage
```
/data create [file-name]        # Create a new JSON data file
/data update [file-name]        # Update existing JSON data
/data validate                  # Validate all JSON files
/data schema [file-name]        # Show schema for a file
```

## Available Data Files

| File | Description | Key Schema |
|------|-------------|------------|
| navigation.json | Site navigation structure | items[].id, label_key, href, children[] |
| services.json | RPM/CCM/AWV/VBC service details | services[].id, slug, icon, title_key, cpt_codes[], features[] |
| stats.json | Impact numbers/metrics | stats[].id, value, suffix, label_key, icon |
| team.json | Leadership team members | members[].id, name, title_key, bio_key, photo |
| testimonials.json | Client testimonials | testimonials[].id, quote_key, author, organization_key |
| blog-posts.json | Blog/resource entries | posts[].id, slug, title_key, category, date, featured |
| faq.json | FAQ by category | categories[].id, label_key, questions[].question_key, answer_key |
| certifications.json | Compliance certifications | certifications[].id, name_key, description_key, icon, last_audit |
| partners.json | Partner organizations | partners[].id, name, logo, url |

## Data Rules
1. **No presentation data**: No colors, CSS classes, or HTML in JSON
2. **i18n keys for text**: All user-visible text uses `*_key` fields pointing to i18n files
3. **Consistent IDs**: Unique, kebab-case identifiers
4. **Valid paths**: All image/href paths point to existing or planned locations
5. **ISO dates**: YYYY-MM-DD format for all dates

## Data-HTML Binding
```html
<!-- Declare data source -->
<div data-source="services.json" data-template="service-card">
  <!-- Template renders here -->
</div>

<!-- Template definition -->
<template id="service-card">
  <div class="card">
    <h3 data-field="title_key"></h3>
    <p data-field="description_key"></p>
  </div>
</template>
```

## Validation Checks
- JSON syntax valid (parseable)
- All required fields present
- All `*_key` values exist in en.json and ko.json
- All image paths reference valid directories
- All hrefs point to valid pages
- No duplicate IDs within a file
