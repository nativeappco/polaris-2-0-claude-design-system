# Polaris 2.0 web components catalog

Generated from `@shopify/polaris-types@2.0.0-rc.0` (`custom-elements.json`).
Reference: https://shopify.dev/docs/api/app-home/v2.0-rc/web-components

These are the ONLY UI elements allowed when designing for this system, plus the App Bridge elements `ui-nav-menu`, `ui-title-bar`, `ui-save-bar`, `ui-modal` and the App Bridge Resource Picker.

## `<s-avatar>`
Configure the following properties on the avatar component.

- Attributes: `size`, `alt` (string), `src` (string), `initials` (string)
- Slots: none

## `<s-badge>`
Configure the following properties on the badge component.

- Attributes: `color` ("base" | "strong"), `icon`, `size` ("base" | "large" | "large-100"), `tone`
- Slots: (default)

## `<s-banner>`
Configure the following properties on the banner component.

- Attributes: `tone` ("auto" | "info" | "success" | "warning" | "critical"), `heading` (string), `dismissible` (boolean), `hidden` (boolean)
- Slots: (default), secondary-actions

## `<s-box>`
Configure the following properties on the box component.

- Attributes: `background` ("subdued" | "base" | "strong" | "transparent"), `border` (BorderShorthand), `borderwidth`, `borderstyle` ("" | MaybeAllValuesShorthandProperty<BoxBorderStyles>), `bordercolor` ("subdued" | "base" | "strong"), `borderradius` (MaybeAllValuesShorthandProperty<BoxBorderRadii>), `padding`, `paddingblock`, `paddingblockstart`, `paddingblockend`, `paddinginline`, `paddinginlinestart`, `paddinginlineend`, `display` ("auto" | "none"), `blocksize` ("auto" | "0"), `minblocksize` ("0"), `maxblocksize` ("none" | "0"), `inlinesize` ("auto" | "0"), `mininlinesize` ("0"), `maxinlinesize` ("none" | "0"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `accessibilityrole`, `accessibilitylabel` (string), `overflow` ("visible" | "hidden")
- Slots: (default)

## `<s-button>`
Configure the following properties on the button component.

- Attributes: `tone` ("auto" | "neutral" | "critical"), `icon`, `accessibilitylabel` (string), `variant` ("auto" | "primary" | "secondary" | "tertiary"), `lang` (string), `type` ("button" | "reset" | "submit"), `interestfor` (string), `disabled` (boolean), `download` (string), `target` ("auto" | "_blank" | "_self" | "_parent" | "_top"), `command` ("--auto" | "--show" | "--hide" | "--toggle" | "--copy"), `commandfor` (string), `href` (string), `inlinesize` ("auto" | "fill" | "fit-content"), `loading` (boolean)
- Slots: (default)

## `<s-button-group>`
Configure the following properties on the button group component.

- Attributes: `accessibilitylabel` (string), `gap` ("base" | "none")
- Slots: (default), primary-action, secondary-actions

## `<s-checkbox>`
Configure the following properties on the checkbox component.

- Attributes: `indeterminate` (boolean), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `value` (string), `disabled` (boolean), `accessibilitylabel` (string), `checked` (boolean), `details` (any), `error` (any), `label` (any), `name` (string)
- Slots: error, details

## `<s-chip>`
Configure the following properties on the chip component.

- Attributes: `color` ("subdued" | "base" | "strong"), `accessibilitylabel` (string), `removable` (boolean)
- Slots: (default), graphic

## `<s-choice>`
The choice component creates individual selectable options within a choice list. Use choice to define each option that merchants can select, supporting both single selection (radio buttons) and multiple selection (checkboxes) modes. Choice components support labels, help text, and custom content through slots, providing flexible option presentation within choice lists.

- Attributes: `disabled` (boolean), `accessibilitylabel` (string), `value` (string), `selected` (boolean)
- Slots: (default), details, secondary-content

## `<s-choice-list>`
Configure the following properties on the choice list component.

- Attributes: `disabled` (boolean), `multiple` (boolean), `details` (any), `error` (any), `label` (any), `name` (string), `labelaccessibilityvisibility` ("visible" | "exclusive"), `values` (string[])
- Slots: (default)

## `<s-clickable>`
Configure the following properties on the clickable component.

- Attributes: `loading` (boolean), `lang` (string), `disabled` (boolean), `background` ("subdued" | "base" | "strong" | "transparent"), `border` (BorderShorthand), `borderwidth`, `borderstyle` ("" | MaybeAllValuesShorthandProperty<BoxBorderStyles>), `bordercolor` ("subdued" | "base" | "strong"), `borderradius` (MaybeAllValuesShorthandProperty<BoxBorderRadii>), `padding`, `paddingblock`, `paddingblockstart`, `paddingblockend`, `paddinginline`, `paddinginlinestart`, `paddinginlineend`, `display` ("auto" | "none"), `blocksize` ("auto" | "0"), `minblocksize` ("0"), `maxblocksize` ("none" | "0"), `inlinesize` ("auto" | "0"), `mininlinesize` ("0"), `maxinlinesize` ("none" | "0"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `accessibilityrole`, `accessibilitylabel` (string), `overflow` ("visible" | "hidden"), `type` ("button" | "reset" | "submit"), `interestfor` (string), `download` (string), `target` ("auto" | "_blank" | "_self" | "_parent" | "_top"), `command` ("--auto" | "--show" | "--hide" | "--toggle" | "--copy"), `commandfor` (string), `href` (string)
- Slots: (default)

## `<s-clickable-chip>`
Configure the following properties on the clickable chip component.

- Attributes: `hidden` (boolean), `disabled` (boolean), `href` (string), `removable` (boolean), `color` ("subdued" | "base" | "strong"), `interestfor` (string), `accessibilitylabel` (string), `command` ("--auto" | "--show" | "--hide" | "--toggle" | "--copy"), `commandfor` (string)
- Slots: (default), graphic

## `<s-color-field>`
Configure the following properties on the color field component.

- Attributes: `id` (string), `disabled` (boolean), `name` (string), `value` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete` ("on" | "off"), `alpha` (boolean)
- Slots: error, details

## `<s-color-picker>`
Configure the following properties on the color picker component.

- Attributes: `value` (string), `alpha` (boolean), `id` (string), `name` (string)
- Slots: none

## `<s-date-field>`
Configure the following properties on the date field component.

- Attributes: `value` (string), `id` (string), `disabled` (boolean), `name` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete`, `view` (string), `allow` (string), `disallow` (string), `allowdays` (string), `disallowdays` (string)
- Slots: error, details

## `<s-date-picker>`
Configure the following properties on the date picker component.

- Attributes: `type` ("single" | "range"), `value` (string), `allow` (string), `allowdays` (string), `disallow` (string), `disallowdays` (string), `view` (string), `visiblemonths` ("auto" | "1" | "2"), `name` (string)
- Slots: none

## `<s-divider>`
Configure the following properties on the divider component.

- Attributes: `direction` ("block" | "inline"), `color` ("base" | "strong")
- Slots: none

## `<s-drop-zone>`
Configure the following properties on the drop zone component.

- Attributes: `accessibilitylabel` (string), `multiple` (boolean), `accept` (string), `disabled` (boolean), `error` (any), `label` (any), `required` (boolean), `name` (string), `labelaccessibilityvisibility` ("visible" | "exclusive"), `value` (string), `files` (readonly File[])
- Slots: (default)

## `<s-email-field>`
Configure the following properties on the email field component.

- Attributes: `id` (string), `disabled` (boolean), `name` (string), `value` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete`, `maxlength` (number), `minlength` (number)
- Slots: error, details

## `<s-empty-state>`
Configure the following properties on the empty state component.

- Attributes: `heading` (string)
- Slots: primary-action, secondary-actions, graphic, subheading

## `<s-grid>`
Configure the following properties on the grid component.

- Attributes: `alignitems`, `justifyitems`, `placeitems`, `aligncontent`, `justifycontent`, `placecontent`, `gap`, `rowgap`, `columngap`, `gridtemplatecolumns` (string), `gridtemplaterows` (string), `background` ("subdued" | "base" | "strong" | "transparent"), `border` (BorderShorthand), `borderwidth`, `borderstyle` ("" | MaybeAllValuesShorthandProperty<BoxBorderStyles>), `bordercolor` ("subdued" | "base" | "strong"), `borderradius` (MaybeAllValuesShorthandProperty<BoxBorderRadii>), `padding`, `paddingblock`, `paddingblockstart`, `paddingblockend`, `paddinginline`, `paddinginlinestart`, `paddinginlineend`, `display` ("auto" | "none"), `blocksize` ("auto" | "0"), `minblocksize` ("0"), `maxblocksize` ("none" | "0"), `inlinesize` ("auto" | "0"), `mininlinesize` ("0"), `maxinlinesize` ("none" | "0"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `accessibilityrole`, `accessibilitylabel` (string), `overflow` ("visible" | "hidden")
- Slots: (default)

## `<s-grid-item>`
The grid item component represents a single cell within a grid layout, allowing you to control how content is positioned and sized within the grid. Use grid item as a child of grid to specify column span, row span, and positioning for individual content areas. Grid item supports precise placement control through column and row properties, enabling you to create complex layouts where different items occupy varying amounts of space or appear in specific grid positions.

- Attributes: `gridcolumn` ("auto"), `gridrow` ("auto"), `background` ("subdued" | "base" | "strong" | "transparent"), `border` (BorderShorthand), `borderwidth`, `borderstyle` ("" | MaybeAllValuesShorthandProperty<BoxBorderStyles>), `bordercolor` ("subdued" | "base" | "strong"), `borderradius` (MaybeAllValuesShorthandProperty<BoxBorderRadii>), `padding`, `paddingblock`, `paddingblockstart`, `paddingblockend`, `paddinginline`, `paddinginlinestart`, `paddinginlineend`, `display` ("auto" | "none"), `blocksize` ("auto" | "0"), `minblocksize` ("0"), `maxblocksize` ("none" | "0"), `inlinesize` ("auto" | "0"), `mininlinesize` ("0"), `maxinlinesize` ("none" | "0"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `accessibilityrole`, `accessibilitylabel` (string), `overflow` ("visible" | "hidden")
- Slots: (default)

## `<s-heading>`
Configure the following properties on the heading component.

- Attributes: `fontsize`, `accessibilityrole` ("heading" | "presentation" | "none"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `lineclamp` (number)
- Slots: (default)

## `<s-icon>`
Configure the following properties on the icon component.

- Attributes: `type`, `tone`, `color` ("subdued" | "base"), `size` ("base" | "small"), `interestfor` (string)
- Slots: none

## `<s-image>`
Configure the following properties on the image component.

- Attributes: `loading` ("eager" | "lazy"), `accessibilityrole` ("presentation" | "none" | "img"), `inlinesize` ("auto" | "fill"), `aspectratio`, `objectfit` ("contain" | "cover"), `src` (string), `alt` (string), `srcset` (string), `sizes` (string), `border` (BorderShorthand), `bordercolor` ("subdued" | "base" | "strong"), `borderradius` (MaybeAllValuesShorthandProperty<BoxBorderRadii>), `borderstyle` ("" | MaybeAllValuesShorthandProperty<BoxBorderStyles>), `borderwidth`
- Slots: none

## `<s-link>`
Configure the following properties on the link component.

- Attributes: `tone` ("auto" | "neutral" | "critical"), `accessibilitylabel` (string), `lang` (string), `interestfor` (string), `download` (string), `target` ("auto" | "_blank" | "_self" | "_parent" | "_top"), `command` ("--auto" | "--show" | "--hide" | "--toggle" | "--copy"), `commandfor` (string), `href` (string)
- Slots: (default)

## `<s-list-item>`
The list item component represents a single entry within an ordered list or unordered list. Use list item to structure individual points, steps, or items within a list, with each item automatically receiving appropriate list markers (bullets or numbers) from its parent list. List item must be used as a direct child of ordered list or unordered list components. Each list item can contain text, inline formatting, or other components to create rich list content.

- Attributes: `children` (any), `id` (string | undefined)
- Slots: (default)

## `<s-menu>`
Configure the following properties on the menu component.

- Attributes: `accessibilitylabel` (string), `id` (string)
- Slots: (default)

## `<s-modal>`
Configure the following properties on the modal component.

- Attributes: `size` ("base" | "small-100" | "small" | "large" | "large-100"), `heading` (string), `accessibilitylabel` (string), `padding` ("base" | "none"), `hideoverlay` (() => void), `showoverlay` (() => void), `toggleoverlay` (() => void)
- Slots: (default), primary-action, secondary-actions

## `<s-money-field>`
Configure the following properties on the money field component.

- Attributes: `value` (string), `id` (string), `disabled` (boolean), `details` (any), `error` (any), `label` (any), `required` (boolean), `name` (string), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete` (string), `max` (number), `min` (number), `currencycode`
- Slots: error, details

## `<s-number>`
Configure the following properties on the number component.

- Attributes: `tone`, `color` ("subdued" | "base"), `fontsize`, `fontweight` ("base" | "auto" | "medium" | "semibold" | "bold"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `dir` ("auto" | "ltr" | "rtl")
- Slots: (default)

## `<s-number-field>`
Configure the following properties on the number field component.

- Attributes: `value` (string), `inputmode` ("decimal" | "numeric"), `id` (string), `disabled` (boolean), `details` (any), `error` (any), `label` (any), `required` (boolean), `name` (string), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete`, `max` (number), `suffix` (string), `prefix` (string), `min` (number), `step` (number)
- Slots: error, details

## `<s-option>`
Represents a single option within a select component. Use only as a child of s-select components.

- Attributes: `disabled` (boolean), `value` (string), `selected` (boolean)
- Slots: (default)

## `<s-option-group>`
Represents a group of options within a select component. Use only as a child of `s-select` components.

- Attributes: `disabled` (boolean), `label` (string)
- Slots: (default)

## `<s-ordered-list>`
Configure the following properties on the ordered list component.

- Attributes: `children` (any), `id` (string | undefined)
- Slots: (default)

## `<s-page>`
Use as the outer wrapper of a page.

- Attributes: `inlinesize` ("base" | "small" | "large"), `heading` (string)
- Slots: (default), aside, primary-action, secondary-actions, breadcrumb-actions, supplemental-start

## `<s-paragraph>`
Configure the following properties on the paragraph component.

- Attributes: `color` ("subdued" | "base"), `tone`, `fontsize`, `fontweight` ("base" | "auto" | "medium" | "semibold" | "bold"), `fontvariantnumeric` ("auto" | "normal" | "tabular-nums"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `dir` ("auto" | "ltr" | "rtl"), `lineclamp` (number)
- Slots: (default)

## `<s-password-field>`
Configure the following properties on the password field component.

- Attributes: `id` (string), `disabled` (boolean), `name` (string), `value` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete`, `maxlength` (number), `minlength` (number)
- Slots: error, details

## `<s-popover>`
Configure the following properties on the popover component.

- Attributes: `blocksize` ("auto" | "0"), `inlinesize` ("auto" | "0"), `maxblocksize` ("none" | "0"), `maxinlinesize` ("none" | "0"), `minblocksize` ("0"), `mininlinesize` ("0")
- Slots: (default)

## `<s-press-button>`

- Attributes: `tone` ("neutral"), `icon`, `variant` ("secondary" | "tertiary"), `disabled` (boolean), `accessibilitylabel` (string), `lang` (string), `inlinesize` ("auto" | "fill" | "fit-content"), `loading` (boolean), `pressed` (boolean)
- Slots: (default)

## `<s-progress>`
Configure the following properties on the progress component.

- Attributes: `accessibilitylabel` (string), `max` (number), `tone`, `value` (number)
- Slots: none

## `<s-query-container>`
Configure the following properties on the query container component.

- Attributes: `containername` (string), `id` (string)
- Slots: (default)

## `<s-scroll-box>`

- Attributes: `overflow`, `accessibilityrole` ("generic" | "region"), `accessibilitylabel` (string), `snaptype` ("none" | "mandatory" | "proximity"), `scrollpadding`, `scrollmargin` ("0" | "0 0" | "0 0 0" | "0 0 0 0"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `background` ("subdued" | "base" | "strong" | "transparent"), `blocksize` ("auto" | "0"), `border` (BorderShorthand), `bordercolor` ("subdued" | "base" | "strong"), `borderradius` (MaybeAllValuesShorthandProperty<BoxBorderRadii>), `borderstyle` ("" | MaybeAllValuesShorthandProperty<BoxBorderStyles>), `borderwidth`, `inlinesize` ("auto" | "0"), `maxblocksize` ("none" | "0"), `maxinlinesize` ("none" | "0"), `minblocksize` ("0"), `mininlinesize` ("0"), `display` ("auto" | "none"), `padding`, `paddingblock`, `paddingblockstart`, `paddingblockend`, `paddinginline`, `paddinginlinestart`, `paddinginlineend`
- Slots: (default)

## `<s-search-field>`
Configure the following properties on the search field component.

- Attributes: `id` (string), `disabled` (boolean), `name` (string), `value` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete`, `maxlength` (number), `minlength` (number)
- Slots: error, details

## `<s-section>`
Configure the following properties on the section component.

- Attributes: `accessibilitylabel` (string), `heading` (string), `subheading` (string), `padding` ("base" | "none")
- Slots: (default), primary-action, secondary-actions, graphic, accessory, supplemental

## `<s-select>`
Configure the following properties on the select component.

- Attributes: `value` (string), `icon`, `id` (string), `disabled` (boolean), `name` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string)
- Slots: (default), error, details

## `<s-spinner>`
Configure the following properties on the spinner component.

- Attributes: `size` ("base" | "large" | "large-100"), `accessibilitylabel` (string)
- Slots: none

## `<s-stack>`
Configure the following properties on the stack component.

- Attributes: `justifycontent`, `alignitems`, `aligncontent`, `gap`, `rowgap`, `columngap`, `direction` ("block" | "inline"), `background` ("subdued" | "base" | "strong" | "transparent"), `border` (BorderShorthand), `borderwidth`, `borderstyle` ("" | MaybeAllValuesShorthandProperty<BoxBorderStyles>), `bordercolor` ("subdued" | "base" | "strong"), `borderradius` (MaybeAllValuesShorthandProperty<BoxBorderRadii>), `padding`, `paddingblock`, `paddingblockstart`, `paddingblockend`, `paddinginline`, `paddinginlinestart`, `paddinginlineend`, `display` ("auto" | "none"), `blocksize` ("auto" | "0"), `minblocksize` ("0"), `maxblocksize` ("none" | "0"), `inlinesize` ("auto" | "0"), `mininlinesize` ("0"), `maxinlinesize` ("none" | "0"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `accessibilityrole`, `accessibilitylabel` (string), `overflow` ("visible" | "hidden")
- Slots: (default)

## `<s-switch>`
Configure the following properties on the switch component.

- Attributes: `value` (string), `disabled` (boolean), `accessibilitylabel` (string), `checked` (boolean), `details` (any), `error` (any), `label` (any), `required` (boolean), `name` (string), `labelaccessibilityvisibility` ("visible" | "exclusive")
- Slots: none

## `<s-table>`
Configure the following properties on the table component.

- Attributes: `variant` ("auto" | "list"), `loading` (boolean), `paginate` (boolean), `haspreviouspage` (boolean), `hasnextpage` (boolean)
- Slots: (default), filters

## `<s-table-body>`
The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry. Table body must contain table row components, which in turn contain table cell components for the actual data values.

- Attributes: `children` (any), `id` (string | undefined)
- Slots: (default)

## `<s-table-cell>`
The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table. Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.

- Attributes: `children` (any), `id` (string | undefined)
- Slots: (default)

## `<s-table-header>`
The table header component represents a single column header within a table header row. Use table header as a child of table header row to define column headings and optionally enable column sorting. Table header provides semantic meaning for screen readers and can include sorting controls when configured. Each header corresponds to a column in the table body.

- Attributes: `listslot` ("primary" | "secondary" | "inline" | "kicker" | "labeled"), `format` ("base" | "numeric" | "currency")
- Slots: (default)

## `<s-table-header-row>`
The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels. Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.

- Attributes: `children` (any), `id` (string | undefined)
- Slots: (default)

## `<s-table-row>`
The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table. Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.

- Attributes: `children` (any), `clickdelegate` (string | undefined)
- Slots: (default)

## `<s-text>`
Configure the following properties on the text component.

- Attributes: `color` ("subdued" | "base"), `type` ("strong" | "address" | "redundant" | "generic"), `tone`, `fontvariantnumeric` ("auto" | "normal" | "tabular-nums"), `fontsize`, `fontweight` ("base" | "auto" | "medium" | "semibold" | "bold"), `accessibilityvisibility` ("visible" | "hidden" | "exclusive"), `dir` ("auto" | "ltr" | "rtl"), `interestfor` (string)
- Slots: (default)

## `<s-text-area>`
Configure the following properties on the text area component.

- Attributes: `id` (string), `disabled` (boolean), `name` (string), `value` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete`, `maxlength` (number), `minlength` (number), `rows` (number)
- Slots: error, details

## `<s-text-field>`
Configure the following properties on the text field component.

- Attributes: `id` (string), `disabled` (boolean), `name` (string), `value` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete`, `icon`, `maxlength` (number), `minlength` (number), `suffix` (string), `prefix` (string)
- Slots: accessory, error, details

## `<s-thumbnail>`
Configure the following properties on the thumbnail component.

- Attributes: `size`, `src` (string), `alt` (string)
- Slots: none

## `<s-tooltip>`
Configure the following properties on the tooltip component.

- Attributes: `id` (string)
- Slots: (default)

## `<s-unordered-list>`
Configure the following properties on the unordered list component.

- Attributes: `children` (any), `id` (string | undefined)
- Slots: (default)

## `<s-url-field>`
Configure the following properties on the URL field component.

- Attributes: `id` (string), `disabled` (boolean), `name` (string), `value` (string), `details` (any), `error` (any), `label` (any), `required` (boolean), `labelaccessibilityvisibility` ("visible" | "exclusive"), `placeholder` (string), `readonly` (boolean), `autocomplete`, `maxlength` (number), `minlength` (number)
- Slots: error, details
