import * as preact$1 from 'preact';
import { ComponentChildren as ComponentChildren$1 } from 'preact';
import * as react from 'react';
import { ReactNode, RefAttributes, ForwardRefExoticComponent, PropsWithoutRef } from 'react';

type React = {
    forwardRef: typeof react.forwardRef;
    useRef: typeof react.useRef;
    useLayoutEffect: typeof react.useLayoutEffect;
    useCallback: typeof react.useCallback;
    Children: typeof react.Children;
    createElement: typeof react.createElement;
    useMemo: typeof react.useMemo;
};
type Slots<Props extends object> = readonly (keyof Props)[];
type ReadOnlyProps<Props extends object> = readonly (keyof Props)[];
interface PropConfig<Props extends object> {
    slots?: Slots<Props>;
    readOnlyProps?: ReadOnlyProps<Props>;
}
type ReadOnlyPropKeys<Config> = Config extends {
    readonly readOnlyProps: readonly (infer Key)[];
} ? Extract<Key, string> : never;
type ReactIntrinsicElementChildren<PreactProps extends object> = 'children' extends keyof PreactProps ? {
    children?: ReactNode;
} : Record<never, never>;
type ReactIntrinsicElementProps<PreactProps extends object, ElementType> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> & ReactIntrinsicElementChildren<PreactProps> & RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
};
type ReactIntrinsicElements = {
    [Tag in Exclude<Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>, `s-test-${string}`>]: ReactIntrinsicElementProps<preact$1.createElement.JSX.IntrinsicElements[Tag], Tag extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tag] : HTMLElement>;
};
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements extends ReactIntrinsicElements {
        }
    }
}
type PropsWithChildren<T> = T extends {
    children: ReactNode;
} ? T : React.PropsWithChildren<T>;
declare function reactWrap$1<Props extends object, ElementType extends HTMLElement>(React: React, tagName: string, { slots, readOnlyProps }?: PropConfig<Props>): ForwardRefExoticComponent<PropsWithoutRef<PropsWithChildren<Props>> & RefAttributes<ElementType>>;

/**
 * TODO: Update `any` type here after this is resolved
 * https://github.com/Shopify/ui-api-design/issues/139
 */
type ComponentChildren = any;
type StringChildren = string;

interface GlobalProps {
    /**
     * A unique identifier for the element.
     */
    id?: string;
}

interface ActionSlots {
    /**
     * The primary action to perform, provided as a button or link type element.
     */
    primaryAction?: ComponentChildren;
    /**
     * The secondary actions to perform, provided as button or link type elements.
     */
    secondaryActions?: ComponentChildren;
}

interface BaseOverlayProps {
    /**
     * Callback fired after the overlay is shown.
     */
    onShow?: (event: Event) => void;
    /**
     * Callback fired when the overlay is shown **after** any animations to show the overlay have finished.
     */
    onAfterShow?: (event: Event) => void;
    /**
     * Callback fired after the overlay is hidden.
     */
    onHide?: (event: Event) => void;
    /**
     * Callback fired when the overlay is hidden **after** any animations to hide the overlay have finished.
     */
    onAfterHide?: (event: Event) => void;
}

/**
 * Shared interfaces for web component methods.
 *
 * Methods are required (not optional) because:
 * - Components implementing this interface must provide all methods
 * - Unlike props/attributes, methods are not rendered in HTML but are JavaScript APIs
 * - Consumers expect these methods to be consistently available on all instances
 */
interface BaseOverlayMethods {
    /**
     * Method to show an overlay.
     *
     * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
     */
    showOverlay: () => void;
    /**
     * Method to hide an overlay.
     *
     * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
     */
    hideOverlay: () => void;
    /**
     * Method to toggle the visiblity of an overlay.
     *
     * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
     */
    toggleOverlay: () => void;
}

interface FocusEventProps {
    /**
     * Callback when the element loses focus.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     */
    onBlur?: (event: FocusEvent) => void;
    /**
     * Callback when the element receives focus.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
     */
    onFocus?: (event: FocusEvent) => void;
}
interface ToggleEventProps {
    /**
     * Callback fired when the element state changes **after** any animations have finished.
     *
     * - If the element transitioned from hidden to showing, the `oldState` property will be set to `closed` and the
     *   `newState` property will be set to `open`.
     * - If the element transitioned from showing to hidden, the `oldState` property will be set to `open` and the
     *   `newState` will be `closed`.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState
     */
    onAfterToggle?: (event: ToggleEvent$1) => void;
    /**
     * Callback straight after the element state changes.
     *
     * - If the element is transitioning from hidden to showing, the `oldState` property will be set to `closed` and the
     *   `newState` property will be set to `open`.
     * - If the element is transitioning from showing to hidden, then `oldState` property will be set to `open` and the
     *   `newState` will be `closed`.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState
     */
    onToggle?: (event: ToggleEvent$1) => void;
}
type ToggleState = 'open' | 'closed';
interface ToggleEvent$1 extends Event {
    readonly newState: ToggleState;
    readonly oldState: ToggleState;
}

type SizeKeyword = 'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500';
type ColorKeyword = 'subdued' | 'base' | 'strong';

interface AvatarProps$1 extends GlobalProps {
    /**
     * Initials to display in the avatar.
     */
    initials?: string;
    /**
     * The URL or path to the image.
     *
     * Initials will be rendered as a fallback if `src` is not provided, fails to load or does not load quickly
     */
    src?: string;
    /**
     * Invoked when load of provided image completes successfully.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
     */
    onLoad?: (event: Event) => void;
    /**
     * Invoked on load error of provided image.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
     */
    onError?: (event: Event) => void;
    /**
     * Size of the avatar.
     *
     * @default 'base'
     */
    size?: SizeKeyword;
    /**
     * An alternative text that describes the avatar for the reader
     * to understand what it is about or identify the user the avatar belongs to.
     */
    alt?: string;
}

type BackgroundColorKeyword = 'transparent' | ColorKeyword;
interface BackgroundProps {
    /**
     * Adjust the background of the element.
     *
     * @default 'transparent'
     */
    background?: BackgroundColorKeyword;
}
/**
 * Tone is a property for defining the color treatment of a component.
 *
 * A tone can apply a grouping of colors to a component. For example,
 * critical may have a specific text color and background color.
 *
 * In some cases, like for Banner, the tone may also affect the semantic and accessibility treatment of the component.
 *
 * @default 'auto'
 */
type ToneKeyword = 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical' | 'accent' | 'custom';

type IconType$1 = 'adjust' | 'affiliate' | 'airplane' | 'alert-bubble' | 'alert-circle' | 'alert-diamond' | 'alert-location' | 'alert-octagon' | 'alert-octagon-filled' | 'alert-triangle' | 'alert-triangle-filled' | 'align-horizontal-centers' | 'app-extension' | 'apps' | 'archive' | 'arrow-down' | 'arrow-down-circle' | 'arrow-down-right' | 'arrow-left' | 'arrow-left-circle' | 'arrow-right' | 'arrow-right-circle' | 'arrow-up' | 'arrow-up-circle' | 'arrow-up-right' | 'arrows-in-horizontal' | 'arrows-out-horizontal' | 'asterisk' | 'attachment' | 'automation' | 'backspace' | 'bag' | 'bank' | 'barcode' | 'battery-low' | 'bill' | 'blank' | 'blog' | 'bolt' | 'bolt-filled' | 'book' | 'book-open' | 'brain' | 'broom' | 'bug' | 'bullet' | 'business-entity' | 'button' | 'button-press' | 'calculator' | 'calendar' | 'calendar-check' | 'calendar-compare' | 'calendar-list' | 'calendar-time' | 'camera' | 'camera-flip' | 'caret-down' | 'caret-left' | 'caret-right' | 'caret-up' | 'cart' | 'cart-abandoned' | 'cart-discount' | 'cart-down' | 'cart-filled' | 'cart-sale' | 'cart-send' | 'cart-up' | 'cash-dollar' | 'cash-euro' | 'cash-pound' | 'cash-rupee' | 'cash-yen' | 'catalog-product' | 'categories' | 'channels' | 'channels-filled' | 'chart-cohort' | 'chart-donut' | 'chart-funnel' | 'chart-histogram-first' | 'chart-histogram-first-last' | 'chart-histogram-flat' | 'chart-histogram-full' | 'chart-histogram-growth' | 'chart-histogram-last' | 'chart-histogram-second-last' | 'chart-horizontal' | 'chart-line' | 'chart-popular' | 'chart-stacked' | 'chart-vertical' | 'chat' | 'chat-new' | 'chat-referral' | 'check' | 'check-circle' | 'check-circle-filled' | 'checkbox' | 'chevron-down' | 'chevron-down-circle' | 'chevron-left' | 'chevron-left-circle' | 'chevron-right' | 'chevron-right-circle' | 'chevron-up' | 'chevron-up-circle' | 'circle' | 'circle-dashed' | 'clipboard' | 'clipboard-check' | 'clipboard-checklist' | 'clock' | 'clock-list' | 'clock-revert' | 'code' | 'code-add' | 'collection' | 'collection-featured' | 'collection-list' | 'collection-reference' | 'color' | 'color-none' | 'compass' | 'complete' | 'compose' | 'confetti' | 'connect' | 'content' | 'contract' | 'corner-pill' | 'corner-round' | 'corner-square' | 'credit-card' | 'credit-card-cancel' | 'credit-card-percent' | 'credit-card-reader' | 'credit-card-reader-chip' | 'credit-card-reader-tap' | 'credit-card-secure' | 'credit-card-tap-chip' | 'crop' | 'currency-convert' | 'cursor' | 'cursor-banner' | 'cursor-option' | 'data-presentation' | 'data-table' | 'database' | 'database-add' | 'database-connect' | 'delete' | 'delivered' | 'delivery' | 'desktop' | 'disabled' | 'disabled-filled' | 'discount' | 'discount-add' | 'discount-automatic' | 'discount-code' | 'discount-remove' | 'dns-settings' | 'dock-floating' | 'dock-side' | 'domain' | 'domain-landing-page' | 'domain-new' | 'domain-redirect' | 'download' | 'drag-drop' | 'drag-handle' | 'drawer' | 'duplicate' | 'edit' | 'email' | 'email-follow-up' | 'email-newsletter' | 'empty' | 'enabled' | 'enter' | 'envelope' | 'envelope-soft-pack' | 'eraser' | 'exchange' | 'exit' | 'export' | 'external' | 'eye-check-mark' | 'eye-dropper' | 'eye-dropper-list' | 'eye-first' | 'eyeglasses' | 'fav' | 'favicon' | 'file' | 'file-list' | 'filter' | 'filter-active' | 'flag' | 'flip-horizontal' | 'flip-vertical' | 'flower' | 'folder' | 'folder-add' | 'folder-down' | 'folder-remove' | 'folder-up' | 'food' | 'foreground' | 'forklift' | 'forms' | 'games' | 'gauge' | 'geolocation' | 'gift' | 'gift-card' | 'git-branch' | 'git-commit' | 'git-repository' | 'globe' | 'globe-asia' | 'globe-europe' | 'globe-lines' | 'globe-list' | 'graduation-hat' | 'grid' | 'hashtag' | 'hashtag-decimal' | 'hashtag-list' | 'heart' | 'hide' | 'hide-filled' | 'home' | 'home-filled' | 'icons' | 'identity-card' | 'image' | 'image-add' | 'image-alt' | 'image-explore' | 'image-magic' | 'image-none' | 'image-with-text-overlay' | 'images' | 'import' | 'in-progress' | 'incentive' | 'incoming' | 'incomplete' | 'info' | 'info-filled' | 'inheritance' | 'inventory' | 'inventory-edit' | 'inventory-list' | 'inventory-transfer' | 'inventory-updated' | 'iq' | 'key' | 'keyboard' | 'keyboard-filled' | 'keyboard-hide' | 'keypad' | 'label-printer' | 'language' | 'language-translate' | 'layout-block' | 'layout-buy-button' | 'layout-buy-button-horizontal' | 'layout-buy-button-vertical' | 'layout-column-1' | 'layout-columns-2' | 'layout-columns-3' | 'layout-footer' | 'layout-header' | 'layout-logo-block' | 'layout-popup' | 'layout-rows-2' | 'layout-section' | 'layout-sidebar-left' | 'layout-sidebar-right' | 'layer' | 'lightbulb' | 'link' | 'link-list' | 'list-bulleted' | 'list-bulleted-filled' | 'list-numbered' | 'live' | 'live-critical' | 'live-none' | 'location' | 'location-none' | 'lock' | 'map' | 'markets' | 'markets-euro' | 'markets-rupee' | 'markets-yen' | 'maximize' | 'measurement-size' | 'measurement-size-list' | 'measurement-volume' | 'measurement-volume-list' | 'measurement-weight' | 'measurement-weight-list' | 'media-receiver' | 'megaphone' | 'mention' | 'menu' | 'menu-filled' | 'menu-horizontal' | 'menu-vertical' | 'merge' | 'metafields' | 'metaobject' | 'metaobject-list' | 'metaobject-reference' | 'microphone' | 'microphone-muted' | 'minimize' | 'minus' | 'minus-circle' | 'mobile' | 'money' | 'money-none' | 'money-split' | 'moon' | 'nature' | 'note' | 'note-add' | 'notification' | 'number-one' | 'order' | 'order-batches' | 'order-draft' | 'order-filled' | 'order-first' | 'order-fulfilled' | 'order-repeat' | 'order-unfulfilled' | 'orders-status' | 'organization' | 'outdent' | 'outgoing' | 'package' | 'package-cancel' | 'package-fulfilled' | 'package-on-hold' | 'package-reassign' | 'package-returned' | 'page' | 'page-add' | 'page-attachment' | 'page-clock' | 'page-down' | 'page-heart' | 'page-list' | 'page-reference' | 'page-remove' | 'page-report' | 'page-up' | 'pagination-end' | 'pagination-start' | 'paint-brush-flat' | 'paint-brush-round' | 'paper-check' | 'partially-complete' | 'passkey' | 'paste' | 'pause-circle' | 'payment' | 'payment-capture' | 'payout' | 'payout-dollar' | 'payout-euro' | 'payout-pound' | 'payout-rupee' | 'payout-yen' | 'person' | 'person-add' | 'person-exit' | 'person-filled' | 'person-list' | 'person-lock' | 'person-remove' | 'person-segment' | 'personalized-text' | 'phablet' | 'phone' | 'phone-down' | 'phone-down-filled' | 'phone-in' | 'phone-out' | 'pin' | 'pin-remove' | 'plan' | 'play' | 'play-circle' | 'plus' | 'plus-circle' | 'plus-circle-down' | 'plus-circle-filled' | 'plus-circle-up' | 'point-of-sale' | 'point-of-sale-register' | 'price-list' | 'print' | 'product' | 'product-add' | 'product-cost' | 'product-filled' | 'product-list' | 'product-reference' | 'product-remove' | 'product-return' | 'product-unavailable' | 'profile' | 'profile-filled' | 'question-circle' | 'question-circle-filled' | 'radio-control' | 'receipt' | 'receipt-dollar' | 'receipt-euro' | 'receipt-folded' | 'receipt-paid' | 'receipt-pound' | 'receipt-refund' | 'receipt-rupee' | 'receipt-yen' | 'receivables' | 'redo' | 'referral-code' | 'refresh' | 'remove-background' | 'reorder' | 'replace' | 'replay' | 'reset' | 'return' | 'reward' | 'rocket' | 'rotate-left' | 'rotate-right' | 'sandbox' | 'save' | 'savings' | 'scan-qr-code' | 'search' | 'search-add' | 'search-list' | 'search-recent' | 'search-resource' | 'select' | 'send' | 'settings' | 'share' | 'shield-check-mark' | 'shield-none' | 'shield-pending' | 'shield-person' | 'shipping-label' | 'shipping-label-cancel' | 'shopcodes' | 'slideshow' | 'smiley-happy' | 'smiley-joy' | 'smiley-neutral' | 'smiley-sad' | 'social-ad' | 'social-post' | 'sort' | 'sort-ascending' | 'sort-descending' | 'sound' | 'split' | 'sports' | 'star' | 'star-circle' | 'star-filled' | 'star-half' | 'star-list' | 'status' | 'status-active' | 'stop-circle' | 'store' | 'store-import' | 'store-managed' | 'store-online' | 'sun' | 'table' | 'table-masonry' | 'tablet' | 'target' | 'tax' | 'team' | 'text' | 'text-align-center' | 'text-align-left' | 'text-align-right' | 'text-block' | 'text-bold' | 'text-color' | 'text-font' | 'text-font-list' | 'text-grammar' | 'text-in-columns' | 'text-in-rows' | 'text-indent' | 'text-indent-remove' | 'text-italic' | 'text-quote' | 'text-title' | 'text-underline' | 'text-with-image' | 'theme' | 'theme-cart' | 'theme-edit' | 'theme-store' | 'theme-template' | 'three-d-environment' | 'thumbs-down' | 'thumbs-up' | 'tip-jar' | 'toggle-off' | 'toggle-on' | 'transaction' | 'transaction-fee-add' | 'transaction-fee-dollar' | 'transaction-fee-euro' | 'transaction-fee-pound' | 'transaction-fee-rupee' | 'transaction-fee-yen' | 'transfer' | 'transfer-in' | 'transfer-internal' | 'transfer-out' | 'truck' | 'undo' | 'unknown-device' | 'unlock' | 'upload' | 'variant' | 'variant-list' | 'video' | 'video-list' | 'view' | 'viewport-narrow' | 'viewport-short' | 'viewport-tall' | 'viewport-wide' | 'wallet' | 'wand' | 'watch' | 'wifi' | 'work' | 'work-list' | 'wrench' | 'x' | 'x-circle' | 'x-circle-filled';

/**
 * Like `Extract`, but ensures that the extracted type is a strict subtype of the input type.
 */
type ExtractStrict<T, U extends T> = Extract<T, U>;
type MaybeAllValuesShorthandProperty<T extends string> = T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`;
type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;
type MaybeResponsive<T> = T | `@container${string}`;
/**
 * Prevents widening string literal types in a union to `string`.
 * @example
 * type PropName = 'foo' | 'bar' | string
 * //   ^? string
 * type PropName = 'foo' | 'bar' | (string & {})
 * //   ^? 'foo' | 'bar' | (string & {})
 */
type AnyString = string & {};
/**
 * This is purely to give the ability
 * to have a space or not in the string literal types.
 *
 * For example in the `aspectRatio` property, `16/9` and `16 / 9` are both valid.
 */
type optionalSpace = '' | ' ';

interface BadgeProps$1 extends GlobalProps {
    /**
     * The content of the Badge.
     */
    children?: ComponentChildren;
    /**
     * Sets the tone of the Badge, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: ToneKeyword;
    /**
     * Modify the color to be more or less intense.
     *
     * @default 'base'
     */
    color?: ColorKeyword;
    /**
     * The type of icon to be displayed in the badge.
     *
     * @default ''
     */
    icon?: IconType$1 | AnyString;
    /**
     * The position of the icon in relation to the text.
     */
    iconPosition?: 'start' | 'end';
    /**
     * Adjusts the size.
     *
     * @default 'base'
     */
    size?: SizeKeyword;
}

interface BannerProps$1 extends GlobalProps, ActionSlots {
    /**
     * The title of the banner.
     *
     * @default ''
     */
    heading?: string;
    /**
     * The content of the Banner.
     */
    children?: ComponentChildren;
    /**
     * Sets the tone of the Banner, based on the intention of the information being conveyed.
     *
     * The banner is a live region and the type of status will be dictated by the Tone selected.
     *
     * - `critical` creates an [assertive live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) that is announced by screen readers immediately.
     * - `neutral`, `info`, `success`, `warning` and `caution` creates an [informative live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) that is announced by screen readers after the current message.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role
     *
     * @default 'auto'
     */
    tone?: ToneKeyword;
    /**
     * Makes the content collapsible.
     * A collapsible banner will conceal child elements initially, but allow the user to expand the banner to see them.
     *
     * @default false
     */
    collapsible?: boolean;
    /**
     * Determines whether the close button of the banner is present.
     *
     * When the close button is pressed, the `dismiss` event will fire,
     * then `hidden` will be true,
     * any animation will complete,
     * and the `afterhide` event will fire.
     *
     * @default false
     */
    dismissible?: boolean;
    /**
     * Event handler when the banner is dismissed by the user.
     *
     * This does not fire when setting `hidden` manually.
     *
     * The `hidden` property will be `false` when this event fires.
     */
    onDismiss?: (event: Event) => void;
    /**
     * Event handler when the banner has fully hidden.
     *
     * The `hidden` property will be `true` when this event fires.
     *
     * @implementation If implementations animate the hiding of the banner,
     * this event must fire after the banner has fully hidden.
     * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
     */
    onAfterHide?: (event: Event) => void;
    /**
     * Determines whether the banner is hidden.
     *
     * If this property is being set on each framework render (as in 'controlled' usage),
     * and the banner is `dismissible`,
     * ensure you update app state for this property when the `dismiss` event fires.
     *
     * If the banner is not `dismissible`, it can still be hidden by setting this property.
     *
     * @default false
     */
    hidden?: boolean;
}

interface DisplayProps {
    /**
     * Sets the outer display type of the component. The outer type sets a component’s participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
     *
     * - `auto`: the component’s initial value. The actual value depends on the component and context.
     * - `none`: hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
     * @default 'auto'
     */
    display?: MaybeResponsive<'auto' | 'none'>;
}

interface AccessibilityRoleProps {
    /**
     * Sets the semantic meaning of the component’s content. When set,
     * the role will be used by assistive technologies to help users
     * navigate the page.
     *
     * @implementation Although, in HTML hosts, this property changes the element used,
     * changing this property must not impact the visual styling of inside or outside of the box.
     *
     * @default 'generic'
     */
    accessibilityRole?: AccessibilityRole;
}
type AccessibilityRole = 
/**
 * Used to indicate the primary content.
 *
 * In an HTML host, `main` will render a `<main>` element.
 * Learn more about the [`<main>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
 */
'main'
/**
 * Used to indicate the component is a header.
 *
 * In an HTML host `header` will render a `<header>` element.
 * Learn more about the [`<header>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
 */
 | 'header'
/**
 * Used to display information such as copyright information, navigation links, and privacy statements.
 *
 * In an HTML host `footer` will render a `<footer>` element.
 * Learn more about the [`<footer>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) in the MDN web docs.
 */
 | 'footer'
/**
 * Used to indicate a generic section.
 * Sections should always have a `Heading` or an accessible name provided in the `accessibilityLabel` property.
 *
 * In an HTML host `section` will render a `<section>` element.
 * Learn more about the [`<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) in the MDN web docs.
 *
 */
 | 'section'
/**
 * Used to identify a perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily.
 *
 * In an HTML host `region` will render as `<div role="region">`.
 * A region **must** have an accessible name provided via the `accessibilityLabel` property.
 * Learn more about the [`region` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) in the MDN web docs.
 */
 | 'region'
/**
 * Used to designate a supporting section that relates to the main content.
 *
 * In an HTML host `aside` will render an `<aside>` element.
 * Learn more about the [`<aside>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role) in the MDN web docs.
 */
 | 'aside'
/**
 * Used to identify major groups of links used for navigating.
 *
 * In an HTML host `navigation` will render a `<nav>` element.
 * Learn more about the [`<nav>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role) in the MDN web docs.
 */
 | 'navigation'
/**
 * Used to identify a list of ordered items.
 *
 * In an HTML host `ordered-list` will render a `<ol>` element.
 * Learn more about the [`<ol>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
 */
 | 'ordered-list'
/**
 * Used to identify an item inside a list of items.
 *
 * In an HTML host `list-item` will render a `<li>` element.
 * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) in the MDN web docs.
 */
 | 'list-item'
/**
 * Used to indicates the component acts as a divider that separates and distinguishes sections of content in a list of items.
 *
 * In an HTML host `list-item-separator` will render as `<li role="separator">`.
 * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
 */
 | 'list-item-separator'
/**
 * Used to identify a list of unordered items.
 *
 * In an HTML host `unordered-list` will render a `<ul>` element.
 * Learn more about the [`<ul>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
 */
 | 'unordered-list'
/**
 * Used to indicates the component acts as a divider that separates and distinguishes sections of content.
 *
 * In an HTML host `separator` will render as `<div role="separator">`.
 * Learn more about the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
 */
 | 'separator'
/**
 * Used to define a live region containing advisory information for the user that is not important enough to be an alert.
 *
 * In an HTML host `status` will render as `<div role="status">`.
 * Learn more about the [`status` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) in the MDN web docs.
 */
 | 'status'
/**
 * Used for important, and usually time-sensitive, information.
 *
 * In an HTML host `alert` will render as `<div role="alert">`.
 * Learn more about the [`alert` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) in the MDN web docs.
 */
 | 'alert'
/**
 * Used to create a nameless container element which has no semantic meaning on its own.
 *
 * In an HTML host `generic'` will render a `<div>` element.
 * Learn more about the [`generic` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role) in the MDN web docs.
 */
 | 'generic'
/**
 * Used to strip the semantic meaning of an element, but leave the visual styling intact.
 *
 * Synonym for `none`
 * Learn more about the [`presentation` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) in the MDN web docs.
 */
 | 'presentation'
/**
 * Used to strip the semantic meaning of an element, but leave the visual styling intact.
 *
 * Synonym for `presentation`
 * Learn more about the [`none` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/none_role) in the MDN web docs.
 */
 | 'none';
interface AccessibilityVisibilityProps {
    /**
     * Changes the visibility of the element.
     *
     * - `visible`: the element is visible to all users.
     * - `hidden`: the element is removed from the accessibility tree but remains visible.
     * - `exclusive`: the element is visually hidden but remains in the accessibility tree.
     *
     * @default 'visible'
     */
    accessibilityVisibility?: 'visible' | 'hidden' | 'exclusive';
}
interface LabelAccessibilityVisibilityProps {
    /**
     * Changes the visibility of the component's label.
     *
     * - `visible`: the label is visible to all users.
     * - `exclusive`: the label is visually hidden but remains in the accessibility tree.
     *
     * @default 'visible'
     */
    labelAccessibilityVisibility?: ExtractStrict<AccessibilityVisibilityProps['accessibilityVisibility'], 'visible' | 'exclusive'>;
}

type PaddingKeyword = SizeKeyword | 'none';
interface PaddingProps {
    /**
     * Adjust the padding of all edges.
     *
     * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
     * supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
     *
     * - 4 values: `block-start inline-end block-end inline-start`
     * - 3 values: `block-start inline block-end`
     * - 2 values: `block inline`
     *
     * For example:
     * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
     * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
     * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
     * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
     *
     * A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.
     *
     * @default 'none'
     */
    padding?: MaybeResponsive<MaybeAllValuesShorthandProperty<PaddingKeyword>>;
    /**
     * Adjust the block-padding.
     *
     * - `large none` means block-start padding is `large`, block-end padding is `none`.
     *
     * This overrides the block value of `padding`.
     *
     * @default '' - meaning no override
     */
    paddingBlock?: MaybeResponsive<MaybeTwoValuesShorthandProperty<PaddingKeyword> | ''>;
    /**
     * Adjust the block-start padding.
     *
     * This overrides the block-start value of `paddingBlock`.
     *
     * @default '' - meaning no override
     */
    paddingBlockStart?: MaybeResponsive<PaddingKeyword | ''>;
    /**
     * Adjust the block-end padding.
     *
     * This overrides the block-end value of `paddingBlock`.
     *
     * @default '' - meaning no override
     */
    paddingBlockEnd?: MaybeResponsive<PaddingKeyword | ''>;
    /**
     * Adjust the inline padding.
     *
     * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
     *
     * This overrides the inline value of `padding`.
     *
     * @default '' - meaning no override
     */
    paddingInline?: MaybeResponsive<MaybeTwoValuesShorthandProperty<PaddingKeyword> | ''>;
    /**
     * Adjust the inline-start padding.
     *
     * This overrides the inline-start value of `paddingInline`.
     *
     * @default '' - meaning no override
     */
    paddingInlineStart?: MaybeResponsive<PaddingKeyword | ''>;
    /**
     * Adjust the inline-end padding.
     *
     * This overrides the inline-end value of `paddingInline`.
     *
     * @default '' - meaning no override
     */
    paddingInlineEnd?: MaybeResponsive<PaddingKeyword | ''>;
}
type SizeUnits = `${number}px` | `${number}%` | `0`;
type SizeUnitsOrAuto = SizeUnits | 'auto';
type SizeUnitsOrNone = SizeUnits | 'none';
interface SizingProps {
    /**
     * Adjust the block size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
     *
     * @default 'auto'
     */
    blockSize?: MaybeResponsive<SizeUnitsOrAuto>;
    /**
     * Adjust the minimum block size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
     *
     * @default '0'
     */
    minBlockSize?: MaybeResponsive<SizeUnits>;
    /**
     * Adjust the maximum block size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
     *
     * @default 'none'
     */
    maxBlockSize?: MaybeResponsive<SizeUnitsOrNone>;
    /**
     * Adjust the inline size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
     *
     * @default 'auto'
     */
    inlineSize?: MaybeResponsive<SizeUnitsOrAuto>;
    /**
     * Adjust the minimum inline size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
     *
     * @default '0'
     */
    minInlineSize?: MaybeResponsive<SizeUnits>;
    /**
     * Adjust the maximum inline size.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
     *
     * @default 'none'
     */
    maxInlineSize?: MaybeResponsive<SizeUnitsOrNone>;
}
type BorderStyleKeyword = 'none' | 'solid' | 'dashed' | 'dotted' | 'auto';
type BorderSizeKeyword = SizeKeyword | 'none';
type BorderRadiusKeyword = SizeKeyword | 'max' | 'none';
/**
 * Represents a shorthand for defining a border. It can be a combination of size, optionally followed by color, optionally followed by style.
 */
type BorderShorthand = BorderSizeKeyword | `${BorderSizeKeyword} ${ColorKeyword}` | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;
interface BorderProps {
    /**
     * Set the border via the shorthand property.
     *
     * This can be a size, optionally followed by a color, optionally followed by a style.
     *
     * If the color is not specified, it will be `base`.
     *
     * If the style is not specified, it will be `auto`.
     *
     * Values can be overridden by `borderWidth`, `borderStyle`, and `borderColor`.
     *
     * @example
     * // The following are equivalent:
     * <Box border="large-100 strong dashed" />
     * <Box borderWidth="large-100" borderColor="strong" borderStyle="dashed" />
     *
     * @default 'none' - equivalent to `none base auto`.
     */
    border?: BorderShorthand;
    /**
     * Set the width of the border.
     *
     * If set, it takes precedence over the `border` property's width.
     *
     * Like CSS, up to 4 values can be specified.
     *
     * If one value is specified, it applies to all sides.
     *
     * If two values are specified, they apply to the block sides and inline sides respectively.
     *
     * If three values are specified, they apply to the block-start, both inline sides, and block-end respectively.
     *
     * If four values are specified, they apply to the block-start, block-end, inline-start, and inline-end sides respectively.
     *
     * @default '' - meaning no override
     */
    borderWidth?: MaybeAllValuesShorthandProperty<BorderSizeKeyword> | '';
    /**
     * Set the style of the border.
     *
     * If set, it takes precedence over the `border` property's style.
     *
     * Like CSS, up to 4 values can be specified.
     *
     * If one value is specified, it applies to all sides.
     *
     * If two values are specified, they apply to the block sides and inline sides respectively.
     *
     * If three values are specified, they apply to the block-start, both inline sides, and block-end respectively.
     *
     * If four values are specified, they apply to the block-start, block-end, inline-start, and inline-end sides respectively.
     *
     * @default '' - meaning no override
     */
    borderStyle?: MaybeAllValuesShorthandProperty<BorderStyleKeyword> | '';
    /**
     * Set the color of the border.
     *
     * If set, it takes precedence over the `border` property's color.
     *
     * @default '' - meaning no override
     */
    borderColor?: ColorKeyword | '';
    /**
     * Set the radius of the border.
     *
     * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
     * supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
     *
     * - 4 values: `start-start start-end end-end end-start`
     * - 3 values: `start-start (start-end & end-start) start-end`
     * - 2 values: `(start-start & end-end) (start-end & end-start)`
     *
     * For example:
     * - `small-100` means start-start, start-end, end-end and end-start border radii are `small-100`.
     * - `small-100 none` means start-start and end-end border radii are `small-100`, start-end and end-start border radii are `none`.
     * - `small-100 none large-100` means start-start border radius is `small-100`, start-end border radius is `none`, end-end border radius is `large-100` and end-start border radius is `none`.
     * - `small-100 none large-100 small-100` means start-start border radius is `small-100`, start-end border radius is `none`, end-end border radius is `large-100` and end-start border radius is `small-100`.
     *
     * @defaultValue 'none'
     */
    borderRadius?: MaybeAllValuesShorthandProperty<BorderRadiusKeyword>;
}
interface OverflowProps {
    /**
     * Sets the overflow behavior of the element.
     *
     * - `hidden`: clips the content when it is larger than the element’s container.
     * The element will not be scrollable and the users will not be able
     * to access the clipped content by dragging or using a scroll wheel on a mouse.
     * - `visible`: the content that extends beyond the element’s container is visible.
     *
     * @default 'visible'
     */
    overflow?: 'hidden' | 'visible';
}
interface BaseBoxProps extends AccessibilityVisibilityProps, BackgroundProps, DisplayProps, SizingProps, PaddingProps, BorderProps, OverflowProps {
    /**
     * The content of the Box.
     */
    children?: ComponentChildren;
    /**
     * A label that describes the purpose or contents of the element.
     * When set, it will be announced to users using assistive technologies and will provide them with more context.
     *
     * Only use this when the element's content is not enough context for users using assistive technologies.
     */
    accessibilityLabel?: string;
}
interface BaseBoxPropsWithRole extends BaseBoxProps, AccessibilityRoleProps {
}

interface BoxProps$1 extends BaseBoxPropsWithRole, GlobalProps {
}

interface ButtonBehaviorProps extends InteractionProps, FocusEventProps {
    /**
     * The behavior of the Button.
     *
     * - `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
     * - `button`: Used to indicate the component acts as a button, meaning it has no default action.
     * - `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
     *
     * This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.
     *
     * @default 'button'
     */
    type?: 'submit' | 'button' | 'reset';
    /**
     * Callback when the Button is activated.
     * This will be called before the action indicated by `type`.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
     */
    onClick?: (event: Event) => void;
    /**
     * Disables the Button meaning it cannot be clicked or receive focus.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Replaces content with a loading indicator while a background action is being performed.
     *
     * This also disables the Button.
     *
     * @default false
     */
    loading?: boolean;
}
interface LinkBehaviorProps extends InteractionProps, FocusEventProps {
    /**
     * The URL to link to.
     *
     * - If set, it will navigate to the location specified by `href` after executing the `click` event.
     * - If a `commandFor` is set, the `command` will be executed instead of the navigation.
     */
    href?: string;
    /**
     * Specifies where to display the linked URL.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
     *
     * 'auto': The target is automatically determined based on the origin of the URL.
     *
     * @implementation Surfaces can set specific rules on how they handle each URL.
     * @implementation It’s expected that the behavior of `auto` is as `_self` except in specific cases.
     * @implementation For example, a surface could decide to open cross-origin URLs in a new window (as `_blank`).
     *
     * @default 'auto'
     */
    target?: 'auto' | '_blank' | '_self' | '_parent' | '_top' | AnyString;
    /**
     * Causes the browser to treat the linked URL as a download with the string being the file name.
     * Download only works for same-origin URLs or the `blob:` and `data:` schemes.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download
     */
    download?: string;
    /**
     * Callback when the link is activated.
     * This will be called before navigating to the location specified by `href`.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
     */
    onClick?: (event: Event) => void;
}
interface InteractionProps {
    /**
     * ID of a component that should respond to activations (e.g. clicks) on this component.
     *
     * See `command` for how to control the behavior of the target.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor
     */
    commandFor?: string;
    /**
     * Sets the action the `commandFor` should take when this clickable is activated.
     *
     * See the documentation of particular components for the actions they support.
     *
     * - `--auto`: a default action for the target component.
     * - `--show`: shows the target component.
     * - `--hide`: hides the target component.
     * - `--toggle`: toggles the target component.
     * - `--copy`: copies the target ClipboardItem.
     *
     * @default '--auto'
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command
     */
    command?: '--auto' | '--show' | '--hide' | '--toggle' | '--copy';
    /**
     * ID of a component that should respond to interest (e.g. hover and focus) on this component.
     */
    interestFor?: string;
}
interface BaseClickableProps extends ButtonBehaviorProps, LinkBehaviorProps {
}

interface ButtonProps$1 extends GlobalProps, BaseClickableProps {
    /**
     * A label that describes the purpose or contents of the Button. It will be read to users using assistive technologies such as screen readers.
     *
     * Use this when using only an icon or the Button text is not enough context
     * for users using assistive technologies.
     */
    accessibilityLabel?: string;
    /**
     * The content of the Button.
     */
    children?: ComponentChildren;
    /**
     * The type of icon to be displayed in the Button.
     *
     * @default ''
     */
    icon?: IconType$1 | AnyString;
    /**
     * The displayed inline width of the Button.
     *
     * - `auto`: the size of the button depends on the surface and context.
     * - `fill`: the button will takes up 100% of the available inline size.
     * - `fit-content`: the button will take up the minimum inline-size required to fit its content.
     *
     * @default 'auto'
     */
    inlineSize?: 'auto' | 'fill' | 'fit-content';
    /**
     * Changes the visual appearance of the Button.
     *
     * @default 'auto' - the variant is automatically determined by the Button's context
     */
    variant?: 'auto' | 'primary' | 'secondary' | 'tertiary';
    /**
     * Sets the tone of the Button based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: ToneKeyword;
    /**
     * Indicate the text language. Useful when the text is in a different language than the rest of the page.
     * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
     * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
     */
    lang?: string;
}

interface ButtonGroupProps$1 extends GlobalProps, ActionSlots {
    /**
     * The content of the ButtonGroup.
     */
    children?: ComponentChildren;
    /**
     * The gap between elements.
     * @default 'base'
     */
    gap?: 'base' | 'none';
    /**
     * Label for the button group that describes the content of the group for screen reader users to understand what's included.
     *
     * @implementation Used as a hidden heading or an aria-label on the wrapping element.
     */
    accessibilityLabel?: string;
}

interface BaseInputProps {
    /**
     * An identifier for the field that is unique within the nearest containing form.
     */
    name?: string;
    /**
     * Disables the field, disallowing any interaction.
     *
     * @default false
     */
    disabled?: boolean;
}
interface InputProps extends BaseInputProps {
    /**
     * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    onChange?: (event: Event) => void;
    /**
     * Callback when the user makes any changes in the field.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
     */
    onInput?: (event: Event) => void;
    /**
     * The current value for the field. If omitted, the field will be empty.
     */
    value?: string;
    /**
     * The default value for the field.
     *
     * @implementation `defaultValue` reflects to the `value` attribute.
     */
    defaultValue?: string;
}
interface MultipleInputProps extends BaseInputProps {
    /**
     * Callback when the user has selected option(s).
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    onChange?: (event: Event) => void;
    /**
     * Callback when the user has selected option(s).
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
     */
    onInput?: (event: Event) => void;
    /**
     * An array of the `value`s of the selected options.
     *
     * This is a convenience prop for setting the `selected` prop on child options.
     */
    values?: string[];
}
interface FileInputProps extends BaseInputProps {
    /**
     * Callback when the user has **finished selecting** a file or files.
     */
    onChange?: (event: Event) => void;
    /**
     * Callback when the user makes any changes in the file selection.
     */
    onInput?: (event: Event) => void;
    /**
     * A string that represents the path to the selected file(s). If no file is selected yet, the value is an empty string ("").
     * When the user selected multiple files, the value represents the first file in the list of files they selected.
     * The value is always the file's name prefixed with "C:\fakepath\", which isn't the real path of the file.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file#value
     *
     * @default ''
     */
    value?: string;
    /**
     * An array of File objects representing the files currently selected by the user.
     *
     * This property is read-only and cannot be directly modified.
     * To clear the selected files, set the `value` prop to an empty string or null.
     *
     * @default []
     */
    files?: readonly File[];
}
interface FieldErrorProps {
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     *
     * @implementation (string) The error is a simple string that will be displayed to the user.
     *
     * @implementation (ComponentChildren) Behaves as a slot: any elements passed
     * are rendered as the error content (subject to surface constraints); there
     * is no coercion to a string.
     */
    error?: string | ComponentChildren;
}
interface BasicFieldProps extends FieldErrorProps, LabelAccessibilityVisibilityProps {
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     *
     * @default false
     */
    required?: boolean;
    /**
     * Content to use as the field label.
     *
     * @implementation (string) The label is a simple string that will be displayed to the user.
     *
     * @implementation (ComponentChildren) Behaves as a slot: any elements passed
     * are rendered as the label content (subject to surface constraints); there
     * is no coercion to a string.
     */
    label?: string | ComponentChildren;
}
interface FieldDetailsProps {
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     *
     * @implementation (string) The details is a simple string that will be displayed to the user.
     *
     * @implementation (ComponentChildren) Behaves as a slot: any elements passed
     * are rendered as the details content (subject to surface constraints); there
     * is no coercion to a string.
     */
    details?: string | ComponentChildren;
}
interface FieldProps extends BasicFieldProps, InputProps, FocusEventProps, FieldDetailsProps {
    /**
     * A short hint that describes the expected value of the field.
     */
    placeholder?: string;
}
interface BaseTextFieldProps extends FieldProps {
    /**
     * The field cannot be edited by the user. It is focusable will be announced by screen readers.
     *
     * @default false
     */
    readOnly?: boolean;
}
interface FieldDecorationProps {
    /**
     * A value to be displayed immediately after the editable portion of the field.
     *
     * This is useful for displaying an implied part of the value, such as "@shopify.com", or "%".
     *
     * This cannot be edited by the user, and it isn't included in the value of the field.
     *
     * It may not be displayed until the user has interacted with the input.
     * For example, an inline label may take the place of the suffix until the user focuses the input.
     *
     * @default ''
     */
    suffix?: string;
    /**
     * A value to be displayed immediately before the editable portion of the field.
     *
     * This is useful for displaying an implied part of the value, such as "https://" or "+353".
     *
     * This cannot be edited by the user, and it isn't included in the value of the field.
     *
     * It may not be displayed until the user has interacted with the input.
     * For example, an inline label may take the place of the prefix until the user focuses the input.
     *
     * @default ''
     */
    prefix?: string;
    /**
     * The type of icon to be displayed in the field.
     *
     * @default ''
     */
    icon?: IconType$1 | AnyString;
    /**
     * Additional content to be displayed in the field.
     * Commonly used to display an icon that activates a tooltip providing more information.
     */
    accessory?: ComponentChildren;
}
interface NumberConstraintsProps {
    /**
     * The highest decimal or integer to be accepted for the field.
     * When used with `step` the value will round down to the max number.
     *
     * Note: a user will still be able to use the keyboard to input a number higher than
     * the max. It is up to the developer to add appropriate validation.
     *
     * @default Infinity
     */
    max?: number;
    /**
     * The lowest decimal or integer to be accepted for the field.
     * When used with `step` the value will round up to the min number.
     *
     * Note: a user will still be able to use the keyboard to input a number lower than
     * the min. It is up to the developer to add appropriate validation.
     *
     * @default -Infinity
     */
    min?: number;
    /**
     * The amount the value can increase or decrease by. This can be an integer or decimal.
     * If a `max` or `min` is specified with `step` when increasing/decreasing the value
     * via the buttons, the final value will always round to the `max` or `min`
     * rather than the closest valid amount.
     *
     * @default 1
     */
    step?: number;
    /**
     * Sets the type of controls displayed in the field.
     *
     * - `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property.
     * Appropriate mouse and [keyboard interactions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role#keyboard_interactions) to control the value of the field are enabled.
     * - `none`: no controls are displayed and users must input the value manually. Arrow keys and scroll wheels can’t be used either to avoid accidental changes.
     * - `auto`: the presence of the controls depends on the surface and context.
     *
     * @default 'auto'
     */
    controls?: 'auto' | 'stepper' | 'none';
}
interface MinMaxLengthProps {
    /**
     * Specifies the maximum number of characters allowed.
     *
     * @default Infinity
     */
    maxLength?: number;
    /**
     * Specifies the min number of characters allowed.
     *
     * @default 0
     */
    minLength?: number;
}
interface BaseSelectableProps {
    /**
     * A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced.
     * This can also be used to display a control without a visual label, while still providing context to users using screen readers.
     */
    accessibilityLabel?: string;
    /**
     * Disables the control, disallowing any interaction.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * The value used in form data when the control is checked.
     */
    value?: string;
}
interface BaseOptionProps extends BaseSelectableProps {
    /**
     * Whether the control is active.
     *
     * @default false
     */
    selected?: boolean;
    /**
     * Whether the control is active by default.
     *
     * @implementation `defaultSelected` reflects to the `selected` attribute.
     *
     * @default false
     */
    defaultSelected?: boolean;
}
interface BaseCheckableProps extends BaseSelectableProps, FocusEventProps, LabelAccessibilityVisibilityProps, InteractionProps {
    /**
     * Visual content to use as the control label.
     *
     * @implementation (string) The label is a simple string that will be displayed to the user.
     *
     * @implementation (ComponentChildren) Behaves as a slot: any elements passed
     * are rendered as the label content (subject to surface constraints); there
     * is no coercion to a string.
     */
    label?: string | ComponentChildren;
    /**
     * Whether the control is active.
     *
     * @default false
     */
    checked?: boolean;
    /**
     * Whether the control is active by default.
     *
     * @implementation `defaultChecked` reflects to the `checked` attribute.
     *
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * An identifier for the control that is unique within the nearest
     * containing `Form` component.
     */
    name?: string;
    /**
     * A callback that is run whenever the control is changed.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    onChange?: (event: Event) => void;
    /**
     * A callback that is run whenever the control is changed.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
     */
    onInput?: (event: Event) => void;
}

interface CheckboxProps$1 extends GlobalProps, BaseCheckableProps, FieldErrorProps, FieldDetailsProps {
    /**
     * Whether to display the checkbox in an indeterminate state (neither checked or unchecked).
     *
     * In terms of appearance, this takes priority over the `checked` prop.
     * But this is purely a visual change.
     * Whether the value is submitted along with a form is still down to the `checked` prop.
     *
     * If `indeterminate` has not been explicitly set, and the `indeterminate` state hasn't been modified by the user (via clicking),
     * then `indeterminate` returns the value of `defaultIndeterminate`.
     *
     * @implementation The `indeterminate` property doesn't reflect to any attribute.
     */
    indeterminate?: boolean;
    /**
     * Whether the checkbox is in an `indeterminate` state by default.
     *
     * Similar to `defaultValue` and `defaultChecked`, this value applies until `indeterminate` is set, or user changes the state of the checkbox.
     *
     * @implementation `defaultIndeterminate` reflects to the `indeterminate` attribute.
     *
     * @default false
     */
    defaultIndeterminate?: boolean;
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     *
     * @default false
     */
    required?: boolean;
}

interface ChipProps$2 extends GlobalProps {
    /**
     * The content of the chip.
     */
    children?: ComponentChildren;
    /**
     * The graphic to display inside of the chip.
     *
     * @implementation Only `s-icon` is supported.
     */
    graphic?: ComponentChildren;
    /**
     * A label that describes the purpose or contents of the Chip. It will be read to users using assistive technologies such as screen readers.
     */
    accessibilityLabel?: string;
    /**
     * Modify the color to be more or less intense.
     *
     * @default 'base'
     */
    color?: ColorKeyword;
    /**
     * Whether the chip is removable.
     *
     * @default false
     */
    removable?: boolean;
    /**
     * Callback when the chip is removed.
     */
    onRemove?: (event: Event) => void;
    /**
     * Determines whether the chip is hidden.
     *
     * If this property is being set on each framework render (as in 'controlled' usage),
     * and the chip is `removable`,
     * ensure you update app state for this property when the `remove` event fires.
     *
     * If the chip is not `removable`, it can still be hidden by setting this property.
     *
     * @default false
     */
    hidden?: boolean;
    /**
     * Event handler when the chip has fully hidden.
     *
     * The `hidden` property will be `true` when this event fires.
     *
     * @implementation If implementations animate the hiding of the chip,
     * this event must fire after the chip has fully hidden.
     * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
     */
    onAfterHide?: (event: Event) => void;
}

interface ChipProps$1 extends ChipProps$2, GlobalProps {
}

interface ChoiceProps$1 extends GlobalProps, BaseOptionProps {
    /**
     * Content to use as the choice label.
     *
     * @implementation (StringChildren) The label is produced by extracting and
     * concatenating the text nodes from the provided content; any markup or
     * element structure is ignored.
     *
     * @implementation (ComponentChildren) Behaves as a slot: any elements passed
     * are rendered as the label content (subject to surface constraints); there
     * is no coercion to a string.
     */
    children?: ComponentChildren | StringChildren;
    /**
     * Additional text to provide context or guidance for the input.
     *
     * This text is displayed along with the input and its label
     * to offer more information or instructions to the user.
     *
     * @implementation this content should be linked to the input with an `aria-describedby` attribute.
     */
    details?: ComponentChildren;
    /**
     * Set to `true` to associate a choice with the error passed to `ChoiceList`
     *
     * @default false
     */
    error?: boolean;
    /**
     * Secondary content for a choice.
     */
    secondaryContent?: ComponentChildren;
    /**
     * Content to display when the option is selected.
     *
     * This can be used to provide additional information or options related to the choice.
     */
    selectedContent?: ComponentChildren;
}

interface ChoiceListProps$1 extends GlobalProps, Pick<BasicFieldProps, 'label' | 'labelAccessibilityVisibility' | 'error'>, MultipleInputProps, FieldDetailsProps {
    /**
     * Whether multiple choices can be selected.
     *
     * @default false
     */
    multiple?: boolean;
    /**
     * The choices a user can select from.
     *
     * Accepts `Choice` components.
     */
    children?: ComponentChildren;
    /**
     * Disables the field, disallowing any interaction.
     *
     * `disabled` on any child choices is ignored when this is true.
     *
     * @default false
     */
    disabled?: MultipleInputProps['disabled'];
    /**
     * The variant of the choice grid.
     *
     * - `auto`: The variant is determined by the context.
     * - `list`: The choices are displayed in a list.
     * - `inline`: The choices are displayed on the inline axis.
     * - `block`: The choices are displayed on the block axis.
     * - `grid`: The choices are displayed in a grid.
     *
     * @implementation The `block`, `inline` and `grid` variants are more suitable for button looking choices, but it's at the
     * discretion of each surface.
     *
     * @default 'auto'
     */
    variant?: 'auto' | 'list' | 'inline' | 'block' | 'grid';
}

interface ClickableProps$1 extends GlobalProps, BaseBoxProps, BaseClickableProps {
    /**
     * Disables the clickable, and indicates to assistive technology that the loading is in progress.
     *
     * This also disables the clickable.
     */
    loading?: BaseClickableProps['loading'];
    /**
     * Disables the clickable, meaning it cannot be clicked or receive focus.
     *
     * In this state, onClick will not fire.
     * If the click event originates from a child element, the event will immediately stop propagating from this element.
     *
     * However, items within the clickable can still receive focus and be interacted with.
     *
     * This has no impact on the visual state by default,
     * but developers are encouraged to style the clickable accordingly.
     */
    disabled?: BaseClickableProps['disabled'];
    /**
     * Indicate the text language. Useful when the text is in a different language than the rest of the page.
     * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
     * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
     *
     * @default ''
     */
    lang?: string;
}

interface ClickableChipProps$1 extends ChipProps$2, GlobalProps, InteractionProps {
    /**
     * Callback when the chip is clicked.
     */
    onClick?: (event: Event) => void;
    /**
     * The URL to link to.
     *
     * - If set, it will navigate to the location specified by `href` after executing the `click` event.
     * - If a `commandFor` is set, the `command` will be executed instead of the navigation.
     */
    href?: string;
    /**
     * Disables the chip, disallowing any interaction.
     *
     * @default false
     */
    disabled?: boolean;
}

interface ColorPickerProps$1 extends GlobalProps, InputProps {
    /**
     * Allow user to select an alpha value.
     *
     * @default false
     */
    alpha?: boolean;
    /**
     * This callback will emit the value in hex.
     *
     * If the `alpha` prop is `true`, `onChange` will emit an 8-value hex (#RRGGBBAA).
     * If the `alpha` prop is `false`, `onChange` will emit a 6-value hex (#RRGGBB).
     */
    onChange?: InputProps['onChange'];
    /**
     * This callback will emit the value in hex.
     *
     * If the `alpha` prop is `true`, `onInput` will emit an 8-value hex (#RRGGBBAA).
     * If the `alpha` prop is `false`, `onInput` will emit a 6-value hex (#RRGGBB).
     */
    onInput?: InputProps['onChange'];
    /**
     * The currently selected color.
     *
     * Supported formats include:
     * - HSL @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
     * - HSLA @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla
     * - RGB @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
     * - RGBA @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
     * - Hex (3-value, 4-value, 6-value, 8-value) @see https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color
     *
     * For RGB and RGBA, both the legacy syntax (comma-separated) and modern syntax (space-separate) are supported.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
     *
     * If the value is invalid, the component will return an empty string ''.
     *
     * Note that the `onChange` handler will emit the value in hex.
     */
    value?: InputProps['value'];
}

interface AutocompleteProps<AutocompleteField extends AnyAutocompleteField> {
    /**
     * A hint as to the intended content of the field.
     *
     * When set to `on` (the default), this property indicates that the field should support
     * autofill, but you do not have any more semantic information on the intended
     * contents.
     *
     * When set to `off`, you are indicating that this field contains sensitive
     * information, or contents that are never saved, like one-time codes.
     *
     * Alternatively, you can provide value which describes the
     * specific data you would like to be entered into this field during autofill.
     *
     * @see Learn more about the set of {@link https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens|autocomplete values} supported in browsers.
     *
     * @default 'tel' for PhoneField
     * @default 'email' for EmailField
     * @default 'url' for URLField
     * @default 'on' for everything else
     */
    autocomplete?: AutocompleteField | `${AutocompleteSection} ${AutocompleteField}` | `${AutocompleteGroup} ${AutocompleteField}` | `${AutocompleteSection} ${AutocompleteGroup} ${AutocompleteField}` | 'on' | 'off';
}
/**
 * The “section” scopes the autocomplete data that should be inserted
 * to a specific area of the page.
 *
 * Commonly used when there are multiple fields with the same autocomplete needs
 * in the same page. For example: 2 shipping address forms in the same page.
 */
type AutocompleteSection = `section-${string}`;
/**
 * The contact information group the autocomplete data should be sourced from.
 */
type AutocompleteGroup = 'shipping' | 'billing';
/**
 * The contact information subgroup the autocomplete data should be sourced from.
 */
type AutocompleteAddressGroup = 'fax' | 'home' | 'mobile' | 'pager';
type AnyAutocompleteField = 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'country-name' | 'country' | 'current-password' | 'email' | 'family-name' | 'given-name' | 'honorific-prefix' | 'honorific-suffix' | 'language' | 'name' | 'new-password' | 'nickname' | 'one-time-code' | 'organization-title' | 'organization' | 'photo' | 'postal-code' | 'sex' | 'street-address' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'bday-day' | 'bday-month' | 'bday-year' | 'bday' | 'cc-additional-name' | 'cc-expiry-month' | 'cc-expiry-year' | 'cc-expiry' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-csc' | 'cc-type' | `${AutocompleteAddressGroup} email` | 'impp' | `${AutocompleteAddressGroup} impp` | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-local' | 'tel-national' | `${AutocompleteAddressGroup} tel` | `${AutocompleteAddressGroup} tel-area-code` | `${AutocompleteAddressGroup} tel-country-code` | `${AutocompleteAddressGroup} tel-extension` | `${AutocompleteAddressGroup} tel-local-prefix` | `${AutocompleteAddressGroup} tel-local-suffix` | `${AutocompleteAddressGroup} tel-local` | `${AutocompleteAddressGroup} tel-national`;
type TextAutocompleteField = ExtractStrict<AnyAutocompleteField, 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'country-name' | 'country' | 'family-name' | 'given-name' | 'honorific-prefix' | 'honorific-suffix' | 'language' | 'name' | 'nickname' | 'one-time-code' | 'organization-title' | 'organization' | 'postal-code' | 'sex' | 'street-address' | 'transaction-currency' | 'username' | 'cc-name' | 'cc-given-name' | 'cc-additional-name' | 'cc-family-name' | 'cc-type'>;

interface ColorFieldProps$1 extends GlobalProps, BaseTextFieldProps, Pick<ColorPickerProps$1, 'alpha' | 'value' | 'defaultValue'> {
    autocomplete?: Extract<AutocompleteProps<never>['autocomplete'], 'on' | 'off'>;
}

interface DatePickerProps$1 extends GlobalProps, InputProps, FocusEventProps {
    /**
     * Default month to display in `YYYY-MM` format.
     *
     * This value is used until `view` is set, either directly or as a result of user interaction.
     *
     * Defaults to the current month in the user's locale.
     */
    defaultView?: string;
    /**
     * Displayed month in `YYYY-MM` format.
     *
     * `onViewChange` is called when this value changes.
     *
     * Defaults to `defaultView`.
     */
    view?: string;
    /**
     * Called whenever the month to display changes.
     *
     * @param view The new month to display in `YYYY-MM` format.
     */
    onViewChange?: (view: string) => void;
    /**
     * The type of selection the date picker allows.
     *
     * - `single` allows selecting a single date.
     * - `multiple` allows selecting multiple non-contiguous dates.
     * - `range` allows selecting a single range of dates.
     *
     * @default "single"
     */
    type?: 'single' | 'multiple' | 'range';
    /**
     * Dates that can be selected.
     *
     * A comma-separated list of dates, date ranges. Whitespace is allowed after commas.
     *
     * The default `''` allows all dates.
     *
     * - Dates in `YYYY-MM-DD` format allow a single date.
     * - Dates in `YYYY-MM` format allow a whole month.
     * - Dates in `YYYY` format allow a whole year.
     * - Ranges are expressed as `start--end`.
     *     - Ranges are inclusive.
     *     - If either `start` or `end` is omitted, the range is unbounded in that direction.
     *     - If parts of the date are omitted for `start`, they are assumed to be the minimum possible value.
     *       So `2024--` is equivalent to `2024-01-01--`.
     *     - If parts of the date are omitted for `end`, they are assumed to be the maximum possible value.
     *       So `--2024` is equivalent to `--2024-12-31`.
     *     - Whitespace is allowed either side of `--`.
     *
     * @default ""
     *
     * @example
     * `2024-02--2025` // allow any date from February 2024 to the end of 2025
     * `2024-02--` // allow any date from February 2024 to the end of the month
     * `2024-05-09, 2024-05-11` // allow only the 9th and 11th of May 2024
     */
    allow?: string;
    /**
     * Dates that cannot be selected. These subtract from `allow`.
     *
     * A comma-separated list of dates, date ranges. Whitespace is allowed after commas.
     *
     * The default `''` has no effect on `allow`.
     *
     * - Dates in `YYYY-MM-DD` format disallow a single date.
     * - Dates in `YYYY-MM` format disallow a whole month.
     * - Dates in `YYYY` format disallow a whole year.
     * - Ranges are expressed as `start--end`.
     *     - Ranges are inclusive.
     *     - If either `start` or `end` is omitted, the range is unbounded in that direction.
     *     - If parts of the date are omitted for `start`, they are assumed to be the minimum possible value.
     *       So `2024--` is equivalent to `2024-01-01--`.
     *     - If parts of the date are omitted for `end`, they are assumed to be the maximum possible value.
     *       So `--2024` is equivalent to `--2024-12-31`.
     *     - Whitespace is allowed either side of `--`.
     *
     * @default ""
     *
     * @example
     * `--2024-02` // disallow any date before February 2024
     * `2024-05-09, 2024-05-11` // disallow the 9th and 11th of May 2024
     */
    disallow?: string;
    /**
     * Days of the week that can be selected. These intersect with the result of `allow` and `disallow`.
     *
     * A comma-separated list of days. Whitespace is allowed after commas.
     *
     * The default `''` has no effect on the result of `allow` and `disallow`.
     *
     * Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.
     *
     * @default ""
     *
     * @example
     * 'saturday, sunday' // allow only weekends within the result of `allow` and `disallow`.
     */
    allowDays?: string;
    /**
     * Days of the week that cannot be selected. This subtracts from `allowDays`, and intersects with the result of `allow` and `disallow`.
     *
     * A comma-separated list of days. Whitespace is allowed after commas.
     *
     * The default `''` has no effect on `allowDays`.
     *
     * Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.
     *
     * @default ""
     *
     * @example
     * 'saturday, sunday' // disallow weekends within the result of `allow` and `disallow`.
     */
    disallowDays?: string;
    /**
     * Default selected value.
     *
     * The default means no date is selected.
     *
     * If the provided value is invalid, no date is selected.
     *
     * - If `type="single"`, this is a date in `YYYY-MM-DD` format.
     * - If `type="multiple"`, this is a comma-separated list of dates in `YYYY-MM-DD` format.
     * - If `type="range"`, this is a range in `YYYY-MM-DD--YYYY-MM-DD` format. The range is inclusive.
     *
     * @default ""
     */
    defaultValue?: string;
    /**
     * Current selected value.
     *
     * The default means no date is selected.
     *
     * If the provided value is invalid, no date is selected.
     *
     * Otherwise:
     *
     * - If `type="single"`, this is a date in `YYYY-MM-DD` format.
     * - If `type="multiple"`, this is a comma-separated list of dates in `YYYY-MM-DD` format.
     * - If `type="range"`, this is a range in `YYYY-MM-DD--YYYY-MM-DD` format. The range is inclusive.
     *
     * @default ""
     */
    value?: string;
    /**
     * Callback when any date is selected.
     *
     * - If `type="single"`, fires when a date is selected and happens before `onChange`.
     * - If `type="multiple"`, fires when a date is selected before `onChange`.
     * - If `type="range"`, fires when a first date is selected (with the partial value formatted as `YYYY-MM-DD--`), and when the last date is selected before `onChange`.
     */
    onInput?: (event: Event) => void;
    /**
     * Callback when the value is committed.
     *
     * - If `type="single"`, fires when a date is selected after `onInput`.
     * - If `type="multiple"`, fires when a date is selected after `onInput`.
     * - If `type="range"`, fires when a range is completed by selecting the end date after `onInput`.
     */
    onChange?: (event: Event) => void;
}

interface DateFieldProps$1 extends GlobalProps, BaseTextFieldProps, Pick<DatePickerProps$1, 'view' | 'defaultView' | 'value' | 'defaultValue' | 'allow' | 'disallow' | 'allowDays' | 'disallowDays' | 'onViewChange'>, AutocompleteProps<DateAutocompleteField> {
    /**
     * Callback when the user makes any changes in the field.
     * Also triggered when a date is selected using the date picker popup before `onChange`.
     */
    onInput?: (event: Event) => void;
    /**
     * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
     * Also triggered when a date is selected using the date picker popup after `onInput`.
     */
    onChange?: (event: Event) => void;
    /**
     * Callback when the field has an invalid date.
     * This callback will be called, if the date typed is invalid or disabled.
     *
     * Dates that don’t exist or have formatting errors are considered invalid. Some examples of invalid dates are:
     * - 2021-02-31: February doesn’t have 31 days
     * - 2021-02-00: The day can’t be 00
     *
     * Disallowed dates are considered invalid.
     *
     * It’s important to note that this callback will be called only when the user **finishes editing** the date,
     * and it’s called right after the `onChange` callback.
     * The field is **not** validated on every change to the input. Once the buyer has signalled that
     * they have finished editing the field (typically, by blurring the field), the field gets validated and the callback is run if the value is invalid.
     */
    onInvalid?: (event: Event) => void;
}
type DateAutocompleteField = ExtractStrict<AnyAutocompleteField, 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'cc-expiry' | 'cc-expiry-month' | 'cc-expiry-year'>;

interface DividerProps$1 extends GlobalProps {
    /**
     * Specify the direction of the divider. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
     *
     * @default 'inline'
     */
    direction?: 'inline' | 'block';
    /**
     * Modify the color to be more or less intense.
     *
     * @default 'base'
     */
    color?: ColorKeyword;
}

interface DropZoneProps$1 extends GlobalProps, FileInputProps, BasicFieldProps {
    /**
     * A string representing the types of files that are accepted by the drop zone.
     * This string is a comma-separated list of unique file type specifiers which can be one of the following:
     * - A file extension starting with a period (".") character (e.g. .jpg, .pdf, .doc)
     * - A valid MIME type string with no extensions
     *
     * If omitted, all file types are accepted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
     * @default ''
     */
    accept?: string;
    /**
     * A label that describes the purpose or contents of the item. When set,
     * it will be announced to buyers using assistive technologies and will
     * provide them with more context.
     */
    accessibilityLabel?: string;
    /**
     * Whether multiple files can be selected or dropped at once.
     *
     * @default false
     */
    multiple?: boolean;
    /**
     * Callback fired when rejected files are dropped.
     * Files are rejected based on the `accept` prop and are not added to `files`.
     */
    onDropRejected?: (event: Event) => void;
}

interface EmailFieldProps$1 extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<EmailAutocompleteField> {
}
type EmailAutocompleteField = ExtractStrict<AnyAutocompleteField, 'email' | `${AutocompleteAddressGroup} email`>;

interface EmptyStateProps$1 extends GlobalProps, ActionSlots {
    /**
     * The heading of the EmptyState.
     */
    heading?: string;
    /**
     * The subheading of the EmptyState.
     */
    subheading?: ComponentChildren | StringChildren;
    /**
     * The graphic to display in the EmptyState. The only supported components are `Image` and `Icon`.
     */
    graphic?: ComponentChildren;
}

type SpacingKeyword = SizeKeyword | 'none';
interface GapProps {
    /**
     * Adjust spacing between elements.
     *
     * A single value applies to both axes.
     * A pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively.
     *
     * @default 'none'
     */
    gap?: MaybeResponsive<MaybeTwoValuesShorthandProperty<SpacingKeyword>>;
    /**
     * Adjust spacing between elements in the block axis.
     *
     * This overrides the row value of `gap`.
     *
     * @default '' - meaning no override
     */
    rowGap?: MaybeResponsive<SpacingKeyword | ''>;
    /**
     * Adjust spacing between elements in the inline axis.
     *
     * This overrides the column value of `gap`.
     *
     * @default '' - meaning no override
     */
    columnGap?: MaybeResponsive<SpacingKeyword | ''>;
}
type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';
type ContentDistribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
type ContentPosition = 'center' | 'start' | 'end';
type OverflowPosition = `unsafe ${ContentPosition}` | `safe ${ContentPosition}`;
/**
 * Justify items defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
 */
type JustifyItemsKeyword = 'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition;
/**
 * Align items sets the align-self value on all direct children as a group.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 */
type AlignItemsKeyword = 'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition;
/**
 * Justify content defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 */
type JustifyContentKeyword = 'normal' | ContentDistribution | OverflowPosition | ContentPosition;
/**
 *Align content sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
 */
type AlignContentKeyword = 'normal' | BaselinePosition | ContentDistribution | OverflowPosition | ContentPosition;

interface GridProps$1 extends GlobalProps, BaseBoxPropsWithRole, GapProps {
    /**
      Define columns and specify their size.
  
      @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
      @default 'none'
    */
    gridTemplateColumns?: MaybeResponsive<string>;
    /**
      Define rows and specify their size.
  
      @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
      @default 'none'
    */
    gridTemplateRows?: MaybeResponsive<string>;
    /**
      Aligns the grid items along the inline (row) axis.
  
      This overrides the inline value of `placeItems`.
  
      @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
      @default '' - meaning no override
    */
    justifyItems?: MaybeResponsive<JustifyItemsKeyword | ''>;
    /**
      Aligns the grid items along the block (column) axis.
  
      This overrides the block value of `placeItems`.
  
      @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
      @default '' - meaning no override
    */
    alignItems?: MaybeResponsive<AlignItemsKeyword | ''>;
    /**
      A shorthand property for `justify-items` and `align-items`.
  
      @see https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
      @default 'normal normal'
    */
    placeItems?: MaybeResponsive<`${AlignItemsKeyword} ${JustifyItemsKeyword}` | AlignItemsKeyword>;
    /**
      Aligns the grid along the inline (row) axis.
  
      This overrides the inline value of `placeContent`.
  
      @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
      @default '' - meaning no override
    */
    justifyContent?: MaybeResponsive<JustifyContentKeyword | ''>;
    /**
      Aligns the grid along the block (column) axis.
  
      This overrides the block value of `placeContent`.
  
      @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
      @default '' - meaning no override
    */
    alignContent?: MaybeResponsive<AlignContentKeyword | ''>;
    /**
      A shorthand property for `justify-content` and `align-content`.
  
      @see https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
      @default 'normal normal'
    */
    placeContent?: MaybeResponsive<`${AlignContentKeyword} ${JustifyContentKeyword}` | AlignContentKeyword>;
}

interface GridItemProps$1 extends GlobalProps, BaseBoxPropsWithRole {
    /**
     * Number of columns the item will span across
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     *
     * @default 'auto'
     */
    gridColumn?: `span ${number}` | 'auto';
    /**
     * Number of rows the item will span across
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
     *
     * @default 'auto'
     */
    gridRow?: `span ${number}` | 'auto';
}

interface BaseTypographyProps {
    /**
     * Modify the color to be more or less intense.
     *
     * @default 'base'
     */
    color?: ColorKeyword;
    /**
     * Sets the tone of the component, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: ToneKeyword;
    /**
     * Set the numeric properties of the font.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
     *
     * @default 'auto' - inherit from the parent element
     */
    fontVariantNumeric?: 'auto' | 'normal' | 'tabular-nums';
    /**
     * Indicate the text language. Useful when the text is in a different language than the rest of the page.
     * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
     * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
     *
     * It is recommended to combine it with the `dir` attribute to ensure the text is rendered correctly if the surrounding content’s direction is different.
     *
     * @default ''
     */
    lang?: string;
    /**
     * Indicates the directionality of the element’s text.
     *
     * - `ltr`: languages written from left to right (e.g. English)
     * - `rtl`: languages written from right to left (e.g. Arabic)
     * - `auto`: the user agent determines the direction based on the content
     * - `''`: direction is inherited from parent elements (equivalent to not setting the attribute)
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
     *
     * @default ''
     */
    dir?: 'ltr' | 'rtl' | 'auto' | '';
}
interface BlockTypographyProps {
    /**
     * Truncates the text content to the specified number of lines.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp
     *
     * @default Infinity - no truncation is applied
     */
    lineClamp?: number;
}

interface HeadingProps$1 extends GlobalProps, AccessibilityVisibilityProps, BlockTypographyProps {
    /**
     * The content of the Heading.
     */
    children?: ComponentChildren;
    /**
     * Sets the semantic meaning of the component’s content. When set,
     * the role will be used by assistive technologies to help users
     * navigate the page.
     *
     * - `heading`: defines the element as a heading to a page or section.
     * - `presentation`: the heading level will be stripped,
     * and will prevent the element’s implicit ARIA semantics from
     * being exposed to the accessibility tree.
     * - `none`: a synonym for the `presentation` role.
     *
     * @default 'heading'
     *
     * @implementation The `heading` role doesn't need to be applied if
     * the host applies it for you; for example, an HTML host rendering
     * an `<h2>` element should not apply the `heading` role.
     */
    accessibilityRole?: 'heading' | ExtractStrict<AccessibilityRole, 'presentation' | 'none'>;
}

interface IconProps$1 extends GlobalProps, Pick<InteractionProps, 'interestFor'> {
    /**
     * Sets the tone of the icon, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: ToneKeyword;
    /**
     * Modify the color to be more or less intense.
     *
     * @default 'base'
     */
    color?: ColorKeyword;
    /**
     * Adjusts the size of the icon.
     *
     * @default 'base'
     */
    size?: SizeKeyword;
    type?: IconType$1 | AnyString;
}

interface BaseImageProps {
    /**
     * An alternative text description that describe the image for the reader to
     * understand what it is about. It is extremely useful for both users using
     * assistive technology and sighted users. A well written description
     * provides people with visual impairments the ability to participate in
     * consuming non-text content. When a screen readers encounters an `s-image`,
     * the description is read and announced aloud. If an image fails to load,
     * potentially due to a poor connection, the `alt` is displayed on
     * screen instead. This has the benefit of letting a sighted buyer know an
     * image was meant to load here, but as an alternative, they’re still able to
     * consume the text content. Read
     * [considerations when writing alternative text](https://www.shopify.com/ca/blog/image-alt-text#4)
     * to learn more.
     *
     * @default `''`
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt
     */
    alt?: string;
    /**
     * A set of media conditions and their corresponding sizes.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes
     */
    sizes?: string;
    /**
     * The image source (either a remote URL or a local file resource).
     *
     * When the image is loading or no `src` is provided, a placeholder will be rendered.
     *
     * @implementation Surfaces may choose the style of the placeholder, but the space the image occupies should be
     * reserved, except in cases where the image area does not have a contextual inline or block size, which should be rare.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
     */
    src?: string;
    /**
     * A set of image sources and their width or pixel density descriptors.
     *
     * This overrides the `src` property.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset
     */
    srcSet?: string;
}

interface ImageProps$1 extends GlobalProps, BaseImageProps, BorderProps {
    /**
     * Sets the semantic meaning of the component’s content. When set,
     * the role will be used by assistive technologies to help users
     * navigate the page.
     *
     * @default 'img'
     *
     * @implementation The `img` role doesn't need to be applied if
     * the host applies it for you; for example, an HTML host rendering
     * an `<img>` element should not apply the `img` role.
     */
    accessibilityRole?: 'img' | ExtractStrict<AccessibilityRole, 'presentation' | 'none'>;
    /**
     * The displayed inline width of the image.
     *
     * - `fill`: the image will takes up 100% of the available inline size.
     * - `auto`: the image will be displayed at its natural size.
     *
     * @default 'fill'
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width
     */
    inlineSize?: 'fill' | 'auto';
    /**
     * The aspect ratio of the image.
     *
     * The rendering of the image will depend on the `inlineSize` value:
     *
     * - `inlineSize="fill"`: the aspect ratio will be respected and the image will take the necessary space.
     * - `inlineSize="auto"`: the image will not render until it has loaded and the aspect ratio will be ignored.
     *
     * For example, if the value is set as `50 / 100`, the getter returns `50 / 100`.
     * If the value is set as `0.5`, the getter returns `0.5 / 1`.
     *
     * @default '1/1'
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
     */
    aspectRatio?: `${number}${optionalSpace}/${optionalSpace}${number}` | `${number}`;
    /**
     * Determines how the content of the image is resized to fit its container.
     * The image is positioned in the center of the container.
     *
     * @default 'contain'
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
     */
    objectFit?: 'contain' | 'cover';
    /**
     * Determines the loading behavior of the image:
     * - `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
     * - `lazy`: Delays loading the image until it approaches a specified distance from the viewport.
     *
     * @default 'eager'
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading
     */
    loading?: 'eager' | 'lazy';
    /**
     * Invoked when load completes successfully.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
     */
    onLoad?: (event: Event) => void;
    /**
     * Invoked on load error.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
     */
    onError?: (event: Event) => void;
}

interface LinkProps$1 extends GlobalProps, LinkBehaviorProps {
    /**
     * The content of the Link.
     */
    children?: ComponentChildren;
    /**
     * Sets the tone of the Link, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: ToneKeyword;
    /**
     * A label that describes the purpose or contents of the Link. It will be read to users using assistive technologies such as screen readers.
     *
     * Use this when using only an icon or the content of the link is not enough context
     * for users using assistive technologies.
     */
    accessibilityLabel?: string;
    /**
     * Indicate the text language. Useful when the text is in a different language than the rest of the page.
     * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
     * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
     */
    lang?: string;
}

interface ListItemProps$1 extends GlobalProps {
    /**
     * The content of the ListItem.
     */
    children?: ComponentChildren;
}

interface MenuProps$1 extends GlobalProps {
    /**
     * A label that describes the purpose or contents of the element. When set,
     * it will be announced using assistive technologies and provide additional context.
     */
    accessibilityLabel?: string;
    /**
     * The children define the actions to render inside the Menu. Only Button and SearchField components are allowed as children of a Menu, and these Buttons can perform actions (using `onClick`) or link to other parts of the application (using `to`/ `href`). Any other component placed here will be ignored.
     */
    children?: ComponentChildren;
}

interface ModalProps$1 extends GlobalProps, BaseOverlayProps, BaseOverlayMethods, ActionSlots {
    /**
     * A label that describes the purpose of the modal. When set,
     * it will be announced to users using assistive technologies and will
     * provide them with more context.
     *
     * This overrides the `heading` prop for screen readers.
     */
    accessibilityLabel?: string;
    /**
     * A title that describes the content of the Modal.
     *
     */
    heading?: string;
    /**
     * Adjust the padding around the Modal content.
     *
     * `base`: applies padding that is appropriate for the element.
     *
     * `none`: removes all padding from the element. This can be useful when elements inside the Modal need to span
     * to the edge of the Modal. For example, a full-width image. In this case, rely on `Box` with a padding of 'base'
     * to bring back the desired padding for the rest of the content.
     *
     * @default 'base'
     */
    padding?: 'base' | 'none';
    /**
     * Adjust the size of the Modal.
     *
     * `max`: expands the Modal to its maximum size as defined by the host application, on both the horizontal and vertical axes.
     *
     * @default 'base'
     */
    size?: SizeKeyword | 'max';
    /**
     * The content of the Modal.
     */
    children?: ComponentChildren;
}

type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AFN' | 'ALL' | 'DZD' | 'AOA' | 'ARS' | 'AMD' | 'AWG' | 'AUD' | 'BBD' | 'AZN' | 'BDT' | 'BSD' | 'BHD' | 'BIF' | 'BZD' | 'BMD' | 'BTN' | 'BAM' | 'BRL' | 'BOB' | 'BWP' | 'BND' | 'BGN' | 'MMK' | 'KHR' | 'CVE' | 'KYD' | 'XAF' | 'CLP' | 'CNY' | 'COP' | 'KMF' | 'CDF' | 'CRC' | 'HRK' | 'CZK' | 'DKK' | 'DOP' | 'XCD' | 'EGP' | 'ETB' | 'XPF' | 'FJD' | 'GMD' | 'GHS' | 'GTQ' | 'GYD' | 'GEL' | 'HTG' | 'HNL' | 'HKD' | 'HUF' | 'ISK' | 'INR' | 'IDR' | 'ILS' | 'IQD' | 'JMD' | 'JPY' | 'JEP' | 'JOD' | 'KZT' | 'KES' | 'KWD' | 'KGS' | 'LAK' | 'LVL' | 'LBP' | 'LSL' | 'LRD' | 'LTL' | 'MGA' | 'MKD' | 'MOP' | 'MWK' | 'MVR' | 'MXN' | 'MYR' | 'MUR' | 'MDL' | 'MAD' | 'MNT' | 'MZN' | 'NAD' | 'NPR' | 'ANG' | 'NZD' | 'NIO' | 'NGN' | 'NOK' | 'OMR' | 'PAB' | 'PKR' | 'PGK' | 'PYG' | 'PEN' | 'PHP' | 'PLN' | 'QAR' | 'RON' | 'RUB' | 'RWF' | 'WST' | 'SAR' | 'RSD' | 'SCR' | 'SGD' | 'SDG' | 'SYP' | 'ZAR' | 'KRW' | 'SSP' | 'SBD' | 'LKR' | 'SRD' | 'SZL' | 'SEK' | 'CHF' | 'TWD' | 'THB' | 'TZS' | 'TTD' | 'TND' | 'TRY' | 'TMT' | 'UGX' | 'UAH' | 'AED' | 'UYU' | 'UZS' | 'VUV' | 'VND' | 'XOF' | 'YER' | 'ZMW' | 'BYN' | 'BYR' | 'DJF' | 'ERN' | 'FKP' | 'GIP' | 'GNF' | 'IRR' | 'KID' | 'LYD' | 'MRU' | 'SLL' | 'SHP' | 'SOS' | 'STD' | 'STN' | 'TJS' | 'TOP' | 'VED' | 'VEF' | 'VES' | 'XXX';
interface MoneyFieldProps$1 extends GlobalProps, BaseTextFieldProps, NumberConstraintsProps, AutocompleteProps<MoneyAutocompleteField> {
    /**
     * The currency code of the field.
     *
     * When set to 'auto', the field will display the currency code of the shop.
     * If no currency code is set for the shop, resolve to 'XXX' the explicit non value.
     *
     * This value will match the global currency code of the shop, so if you need to know the currency code of the field,
     * you can read the value from those APIs.
     *
     * @default 'auto'
     */
    currencyCode?: CurrencyCode | 'auto';
}
type MoneyAutocompleteField = ExtractStrict<AnyAutocompleteField, 'transaction-amount'>;

interface NumberFieldProps$1 extends GlobalProps, BaseTextFieldProps, AutocompleteProps<NumberAutocompleteField>, NumberConstraintsProps, FieldDecorationProps {
    /**
     * Sets the virtual keyboard.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
     * @default 'decimal'
     */
    inputMode?: 'decimal' | 'numeric';
    /**
     * Callback when the user has **finished editing** a field, e.g. once they have blurred
     * the field after changing the value.
     * Also fired after `onInput` on every step when interacting with the controls or the keyboard up and down arrows.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
     */
    onChange?: (event: Event) => void;
    /**
     * Callback when the user makes any changes in the field.
     * Also fired before `onChange` on every step when interacting with the controls or the keyboard up and down arrows.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
     */
    onInput?: (event: Event) => void;
}
type NumberAutocompleteField = ExtractStrict<AnyAutocompleteField, 'one-time-code' | 'cc-number' | 'cc-csc'>;

interface OptionProps$1 extends GlobalProps, BaseOptionProps {
    /**
     * The content to use as the label.
     */
    children?: ComponentChildren;
}

interface OptionGroupProps$1 extends GlobalProps {
    /**
     * Whether the options within this group can be selected or not.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * The user-facing label for this group of options.
     */
    label?: string;
    /**
     * The options a user can select from.
     *
     * Accepts `Option` components.
     */
    children?: ComponentChildren;
}

interface OrderedListProps$1 extends GlobalProps {
    /**
     * The content of the OrderededList.
     *
     * Accepts only `ListItem` components.
     */
    children?: ComponentChildren;
}

interface PageProps$1 extends GlobalProps, ActionSlots {
    /**
     * The content of the Page.
     */
    children?: ComponentChildren;
    /**
     * The main page heading
     */
    heading?: string;
    /**
     * The text to be used as subtitle.
     */
    subheading?: string;
    /**
     * Additional contextual information about the page.
     */
    accessory?: ComponentChildren;
    /**
     * The breadcrumb actions to perform, provided as link elements.
     */
    breadcrumbActions?: ComponentChildren;
    /**
     * The aside element is section of a page that contains content that is tangentially related to the content around the aside element, and which could be considered separate from that content.
     * Such sections are often represented as sidebars in printed typography.
     * @implementation surfaces built ontop of the web platform should implement this using the <aside> element https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
     */
    aside?: ComponentChildren;
    /**
     * The inline size of the page
     * - `base` corresponds to a set default inline size
     * - `large` full width with whitespace
     *
     * @default 'base'
     */
    inlineSize?: SizeKeyword;
    /**
     * A slot for content that comes before the main content, such as an `s-banner`.
     *
     * @implementation surfaces could restrict the content of this slot to certain elements, such as only allowing an `s-banner`.
     */
    supplementalStart?: ComponentChildren;
}

interface ParagraphProps$1 extends GlobalProps, BaseTypographyProps, BlockTypographyProps, AccessibilityVisibilityProps {
    /**
     * The content of the Paragraph.
     */
    children?: ComponentChildren;
    /**
     * Provide semantic meaning and default styling to the paragraph.
     *
     * Other presentation properties on `s-paragraph` override the default styling.
     *
     * @default 'paragraph'
     */
    type?: ParagraphType;
}
type ParagraphType = 
/**
 * Indicate the text is a structural grouping of related content.
 *
 * In an HTML host, the text will be rendered in an `<p>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
 */
'paragraph'
/**
 * Indicates the text is considered less important than the main content, but is still necessary for the reader to understand.
 * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
 *
 * Surfaces should apply a smaller font size than the default size.
 *
 * In an HTML host, the text will be rendered in a `<small>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 */
 | 'small';

interface PasswordFieldProps$1 extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<PasswordAutocompleteField> {
}
type PasswordAutocompleteField = ExtractStrict<AnyAutocompleteField, 'new-password' | 'current-password'>;

interface PopoverProps$1 extends GlobalProps, BaseOverlayProps, BaseOverlayMethods, ToggleEventProps, SizingProps {
    /**
     * The content of the popover.
     */
    children?: ComponentChildren;
}

interface PressButtonProps$1 extends GlobalProps, Pick<ButtonProps$1, 'accessibilityLabel' | 'children' | 'icon' | 'inlineSize' | 'lang' | 'tone' | 'variant' | 'disabled' | 'loading' | 'onClick' | 'onBlur' | 'onFocus'> {
    /**
     * Whether the button is pressed.
     *
     * @default false
     */
    pressed?: boolean;
    /**
     * Whether the button is pressed by default.
     *
     * @default false
     *
     * @implementation `defaultPressed` reflects to the `pressed` attribute.
     */
    defaultPressed?: boolean;
}

interface ProgressProps$1 extends GlobalProps {
    /**
     * A label that describes the purpose of the progress. When set,
     * it will be announced to users using assistive technologies and will
     * provide them with more context.
     *
     * Use it to provide context of what is progressing.
     */
    accessibilityLabel?: string;
    /**
     * Sets the tone of the progress, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: ToneKeyword;
    /**
     * Specifies how much of the task has been completed.
     *
     * It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted.
     * If there is no value attribute, the progress bar is indeterminate;
     * this indicates that an activity is ongoing with no indication of how long it is expected to take.
     *
     * @implementation Surfaces should apply styling to cover that indeterminate state.
     * @implementation In a HTML host, you can customize the progress animation via the :indeterminate pseudo-class.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#value
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate#progress_bar
     */
    value?: number;
    /**
     * This attribute describes how much work the task indicated by the progress element requires.
     *
     * The `max` attribute, if present, must have a value greater than 0 and be a valid floating point number.
     *
     * @default 1
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#max
     */
    max?: number;
}

interface QueryContainerProps$1 extends GlobalProps {
    /**
     * The content of the container.
     */
    children?: ComponentChildren;
    /**
     * The name of the container, which can be used in your container queries to target this container specifically.
     *
     * We place the container name of `s-default` on every container. Because of this, it is not required to add a `containerName` identifier in your queries. For example, a `@container (inline-size <= 300px) none, auto` query is equivalent to `@container s-default (inline-size <= 300px) none, auto`.
     *
     * Any value set in `containerName` will be set alongside alongside `s-default`. For example, `containerName="my-container-name"` will result in a value of `s-default my-container-name` set on the `container-name` CSS property of the rendered HTML.
     *
     * @default ''
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/container-name
     *
     * @implementation You must always have a CSS `container-name` of `s-default` for this component.
     */
    containerName?: string;
}

type OverflowKeyword = 'auto' | 'hidden';
type ScrollSnapType = 'none' | 'mandatory' | 'proximity';
type ScrollAccessibilityRole = 'generic' | 'region';

interface SectionProps$1 extends GlobalProps, ActionSlots {
    /**
     * The content of the Section.
     */
    children?: ComponentChildren;
    /**
     * A label used to describe the section that will be announced by assistive technologies.
     *
     * When no `heading` property is provided or included as a children of the Section, you **must** provide an
     * `accessibilityLabel` to describe the Section. This is important as it allows assistive technologies to provide
     * the right context to users.
     */
    accessibilityLabel?: string;
    /**
     * A title that describes the content of the section.
     */
    heading?: string;
    /**
     * Adjust the padding of all edges.
     *
     * - `base`: applies padding that is appropriate for the element. Note that it may result in no padding if
     * this is the right design decision in a particular context.
     * - `none`: removes all padding from the element. This can be useful when elements inside the Section need to span
     * to the edge of the Section. For example, a full-width image. In this case, rely on `s-box` with a padding of 'base'
     * to bring back the desired padding for the rest of the content.
     *
     * @default 'base'
     */
    padding?: 'base' | 'none';
}

interface SelectProps$1 extends GlobalProps, AutocompleteProps<AnyAutocompleteField>, Pick<FieldDecorationProps, 'icon'>, Omit<FieldProps, 'defaultValue'>, FocusEventProps {
    /**
     * The options a user can select from.
     *
     * Accepts `Option` and `OptionGroup` components.
     */
    children?: ComponentChildren;
}

interface SpinnerProps$1 extends GlobalProps {
    /**
     * Adjusts the size of the spinner icon.
     *
     * @default 'base'
     */
    size?: SizeKeyword;
    /**
     * A label that describes the purpose of the progress. When set,
     * it will be announced to users using assistive technologies and will
     * provide them with more context. Providing an `accessibilityLabel` is
     * recommended if there is no accompanying text describing that something
     * is loading.
     */
    accessibilityLabel?: string;
}

interface StackProps$1 extends GlobalProps, BaseBoxPropsWithRole, GapProps {
    /**
     * The content of the Stack.
     */
    children?: ComponentChildren;
    /**
     * Sets how the children are placed within the Stack. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
     *
     * @default 'block'
     *
     * @implementation the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
     */
    direction?: MaybeResponsive<'block' | 'inline'>;
    /**
     * Aligns the Stack along the main axis.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     * @default 'normal'
     */
    justifyContent?: MaybeResponsive<JustifyContentKeyword>;
    /**
     * Aligns the Stack's children along the cross axis.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     * @default 'normal'
     */
    alignItems?: MaybeResponsive<AlignItemsKeyword>;
    /**
     * Aligns the Stack along the cross axis.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     * @default 'normal'
     */
    alignContent?: MaybeResponsive<AlignContentKeyword>;
}

interface SwitchProps$1 extends GlobalProps, BaseCheckableProps, BasicFieldProps, FieldDetailsProps, FieldErrorProps {
}

interface PaginationProps {
    /**
     * Whether to use pagination controls.
     *
     * @default false
     */
    paginate?: boolean;
    /**
     * Called when the previous page button is clicked.
     */
    onPreviousPage?: (event: Event) => void;
    /**
     * Called when the next page button is clicked.
     */
    onNextPage?: (event: Event) => void;
    /**
     * Whether there's an additional page of data.
     *
     * @default false
     */
    hasNextPage?: boolean;
    /**
     * Whether there's a previous page of data.
     *
     * @default false
     */
    hasPreviousPage?: boolean;
    /**
     * Whether the table is in a loading state, such as initial page load or loading the next page in a paginated table.
     * When true, the table could be in an inert state, which prevents user interaction.
     *
     * @default false
     */
    loading?: boolean;
}
type ComputedTableVariant = 'list' | 'table';
interface TableProps$1 extends GlobalProps, PaginationProps {
    /**
     * The content of the Table.
     */
    children?: ComponentChildren;
    /**
     * Input elements, such as SearchField, used to search and filter the table.
     */
    filters?: ComponentChildren;
    /**
     * Sets the layout of the Table.
     *
     * - `list`: The Table is displayed as a list.
     * - `table`: The Table is displayed as a table.
     * - `auto`: The Table is displayed as a table on wide devices and as a list on narrow devices.
     *
     * @default 'auto'
     */
    variant?: ComputedTableVariant | 'auto';
    /**
     * The currently-used variant of the Table.
     * This is only a getter; you cannot set it.
     */
    computedVariant?: ComputedTableVariant;
    /**
     * Event is emitted when the computed variant of the Table changes.
     */
    onComputedVariantChange?: (event: Event) => void;
}

interface TableBodyProps$1 extends GlobalProps {
    /**
     * The body of the table. May not have any semantic meaning in the Table's `list` variant.
     */
    children?: ComponentChildren;
}

interface TableCellProps$1 extends GlobalProps {
    /**
     * The content of the table cell.
     */
    children?: ComponentChildren;
}

type ListSlotType = 'primary' | 'secondary' | 'kicker' | 'inline' | 'labeled';
interface TableHeaderProps$1 extends GlobalProps {
    /**
     * The heading of the column in the `table` variant, and the label of its data in `list` variant.
     */
    children?: ComponentChildren;
    /**
     * Content designation for the table's `list` variant.
     *
     * - `primary`: The most important content. Only one column can have this designation.
     * - `secondary`: The secondary content. Only one column can have this designation.
     * - `kicker`: Content that is displayed before primary and secondary content, but with less visual prominence. Only one column can have this designation.
     * - `inline`: Content that is displayed inline.
     * - `labeled`: Each column with this designation displays as a heading-content pair.
     *
     * @default 'labeled'
     */
    listSlot?: ListSlotType;
    /**
     * The format of the column. Will automatically apply styling and alignment to cell content based on the value.
     *
     * - `base`: The base format for columns.
     * - `currency`: Formats the column as currency.
     * - `numeric`: Formats the column as a number.
     *
     * @default 'base'
     */
    format?: 'base' | 'currency' | 'numeric';
}

interface TableHeaderRowProps$1 extends GlobalProps {
    /**
     * Contents of the table heading row; children should be `TableHeading` components.
     */
    children?: ComponentChildren;
}

interface TableRowProps$1 extends GlobalProps {
    /**
     * The content of a TableRow, which should be `TableCell` components.
     */
    children?: ComponentChildren;
    /**
     * The ID of an interactive element (e.g. `s-link`) in the row that will be the target of the click when the row is clicked.
     * This is the primary action for the row; it should not be used for secondary actions.
     *
     * This is a click-only affordance, and does not introduce any keyboard or screen reader affordances.
     * Which is why the target element must be in the table; so that keyboard and screen reader users can interact with it normally.
     *
     * @implementation no focus or keyboard affordances are introduced by this property. No aria attributes need to be added to the table row.
     * @implementation the row and/or delegate should have some affordance that indicates it is clickable. This may be a background color, a border, a hover effect, etc.
     */
    clickDelegate?: string;
}

interface TextProps$1 extends GlobalProps, AccessibilityVisibilityProps, BaseTypographyProps, DisplayProps, Pick<InteractionProps, 'interestFor'> {
    /**
     * The content of the Text.
     */
    children?: ComponentChildren;
    /**
     * Provide semantic meaning and default styling to the text.
     *
     * Other presentation properties on Text override the default styling.
     *
     * @default 'generic'
     */
    type?: TextType;
}
type TextType = 
/**
 * Indicate the text is contact information. Typically used for addresses.
 *
 * This must have `inline` layout (despite the default being `block` in HTML hosts).
 *
 * Surfaces may apply styling to this type.
 *
 * In an HTML host, the text will be rendered in an `<address>` element.
 *
 * @implementation vertical alignment should be `baseline` (`vertical-align: baseline`)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
 */
'address'
/**
 * Indicate the text is no longer accurate or no longer relevant. One such use-case is discounted prices.
 *
 * Surfaces should apply styling to this type to suggest its content no longer applies.
 *
 * In an HTML host, the text will be rendered in a `<s>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
 */
 | 'redundant'
/**
 * Indicate the text is marked or highlighted and relevant to the user’s current action.
 * One such use-case is to indicate the characters that matched a search query.
 *
 * Surfaces should apply styling to this type to draw attention to the content.
 *
 * In an HTML host, the text will be rendered in a `<mark>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
 */
 | 'mark'
/**
 * Indicate emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
 *
 * Surfaces should apply styling to this type to distinguish it from surrounding text. Italicization is a common choice, but not required.
 *
 * In an HTML host, the text will be rendered in an `<em>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
 */
 | 'emphasis'
/**
 * Indicate an offset from the normal prose of the text. Typically used to indicate
 * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
 * instead of representing its semantic meaning.
 *
 * Surfaces should italicize this content by default.
 *
 * In an HTML host, the text will be rendered in a `<i>` tag.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
 */
 | 'offset'
/**
 * Indicate strong importance, seriousness, or urgency.
 *
 * Surfaces should render this content bold by default.
 *
 * In an HTML host, the text will be rendered in a `<strong>` tag.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
 */
 | 'strong'
/**
 * Indicates the text is considered less important than the main content, but is still necessary for the reader to understand.
 * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
 *
 * Surfaces should apply a smaller font size than the default size.
 *
 * In an HTML host, the text will be rendered in a `<small>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 */
 | 'small'
/**
 * No additional semantics or styling is applied.
 *
 * Surfaces must not apply any default styling to this type.
 *
 * In an HTML host, the text will be rendered in a `<span>` tag.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
 */
 | 'generic';

interface TextAreaProps$1 extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<TextAutocompleteField> {
    /**
     * A number of visible text lines.
     *
     * @default 2
     */
    rows?: number;
}

interface TextFieldProps$1 extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<TextAutocompleteField>, FieldDecorationProps {
}

interface ThumbnailProps$1 extends GlobalProps, BaseImageProps {
    /**
     * Invoked when load of provided image completes successfully.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
     */
    onLoad?: (event: Event) => void;
    /**
     * Invoked on load error of provided image.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
     */
    onError?: (event: Event) => void;
    /**
     * Adjusts the size the product thumbnail image.
     *
     * @default 'base'
     */
    size?: SizeKeyword;
}

interface TooltipProps$1 extends GlobalProps {
    /**
     * The content of the Tooltip.
     */
    children?: ComponentChildren;
}

interface UnorderedListProps$1 extends GlobalProps {
    /**
     * The content of the UnorderededList.
     *
     * Accepts only `ListItem` components.
     */
    children?: ComponentChildren;
}

interface URLFieldProps$1 extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<URLAutocompleteField> {
}
type URLAutocompleteField = ExtractStrict<AnyAutocompleteField, 'url' | 'photo' | 'impp' | `${AutocompleteAddressGroup} impp`>;

type Styles = string;
declare const shadowRootSymbol: unique symbol;
declare const flushRenderSymbol: unique symbol;
type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
    ShadowRoot: (element: any) => ComponentChildren$1;
    styles?: Styles;
    /**
     * Only needed once in the root element, to inject global shadow CSS for all components.
     */
    globalShadowCSS?: Styles;
};
interface ActivationEventEsque {
    shiftKey: boolean;
    metaKey: boolean;
    ctrlKey: boolean;
    button: number;
}
interface ClickOptions {
    /**
     * The event you want to influence the synthetic click.
     */
    sourceEvent?: ActivationEventEsque;
}
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 */
declare const BaseClass$2: {
    new (): HTMLElement;
    prototype: HTMLElement;
};
declare abstract class PreactCustomElement extends BaseClass$2 {
    /** @private */
    static get observedAttributes(): string[];
    /** @private */
    [shadowRootSymbol]: ShadowRoot | null;
    /**
     * A promise that resolves after the next render completes.
     * Useful for non-React consumers who need to wait for the shadow DOM
     * to be populated after setting properties.
     * @private
     */
    get updateComplete(): Promise<void>;
    constructor({ styles, ShadowRoot: renderFunction, delegatesFocus, globalShadowCSS, ...options }: RenderImpl);
    /**
     * Flush any pending render synchronously.
     *
     * Called by reactWrap's useLayoutEffect after all props are set,
     * ensuring the shadow DOM is populated before the consumer's
     * useLayoutEffect fires. The version counter invalidates any
     * pending microtask so the total render count stays at 1.
     *
     * Uses a Symbol key so this method is not callable by external
     * consumers — only internal code that imports flushRenderSymbol
     * can invoke it.
     *
     * Guarded by #hasPendingRender to avoid spurious Preact re-renders.
     * React creates a new props object reference on every parent render,
     * so reactWrap's useLayoutEffect (which depends on [props]) fires
     * even when no prop *values* changed. Without the guard, every
     * unrelated parent re-render would trigger a full Preact
     * reconciliation — proportional to parent re-render frequency.
     * @private
     */
    [flushRenderSymbol](): void;
    /** @private */
    setAttribute(name: string, value: string): void;
    /** @private */
    attributeChangedCallback(name: string): void;
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
    /** @private */
    adoptedCallback(): void;
    /**
     * Queue a run of the render function.
     * You shouldn't need to call this manually - it should be handled by changes to @property values.
     * @private
     */
    queueRender(): void;
    /**
     * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
     *
     * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
     * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
     * @private
     * @param options
     */
    click({ sourceEvent }?: ClickOptions): void;
}

interface Context<T> {
    readonly defaultValue: T;
}
declare class AddedContext<T> extends EventTarget {
    constructor(defaultValue: T);
    get value(): T;
    set value(value: T);
}

/**
 * A callback which is provided by a context requester and is called with the value satisfying the request.
 * This callback can be called multiple times by context providers as the requested value is changed.
 */
type ContextCallback<T> = (value: T) => void;
/**
 * An event fired by a context requester to signal it desires a named context.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 */
declare class ContextRequestEvent<T> extends Event {
    readonly context: Context<T>;
    readonly callback: ContextCallback<T>;
    constructor(context: Context<T>, callback: ContextCallback<T>);
}
declare global {
    interface HTMLElementEventMap {
        /**
         * A 'context-request' event can be emitted by any element which desires
         * a context value to be injected by an external provider.
         */
        'context-request': ContextRequestEvent<unknown>;
    }
}

type ReactKey = string & {
    __reactKey: boolean;
};
type AltKey = string & {
    __altKey: boolean;
};
type Props = Record<string, unknown>;
declare global {
    interface HTMLElement {
        [reactKey: ReactKey]: Props;
        [altKey: AltKey]: Props;
    }
}

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
    currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A toggle event with a strongly-typed `currentTarget` property.
 * Extends the `ToggleEvent` interface with type-safe access to the element that triggered the toggle.
 */
type CallbackToggleEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends ToggleEvent = ToggleEvent> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
type CallbackEventListener<T extends keyof HTMLElementTagNameMap> = (EventListener & {
    (event: CallbackEvent<T>): void;
}) | null;
type FieldReactProps<T extends keyof HTMLElementTagNameMap> = {
    /**
     * A callback fired when the user makes changes to the field value. This fires before `onChange`.
     */
    onInput?: ((event: CallbackEvent<T>) => void) | null;
    /**
     * A callback fired when the user has finished editing the field, such as when they blur the field.
     */
    onChange?: ((event: CallbackEvent<T>) => void) | null;
    /**
     * A callback fired when the field receives focus.
     */
    onFocus?: ((event: CallbackEvent<T>) => void) | null;
    /**
     * A callback fired when the field loses focus.
     */
    onBlur?: ((event: CallbackEvent<T>) => void) | null;
};
/**
 * Props for field slot content (label, error, details) that accept
 * either a string or JSX content in the React wrapper.
 *
 * Internal use only — not exported publicly. External consumers receive
 * string-only types via FieldSlotPreactProps.
 */
type FieldSlotInternalReactProps = {
    error?: preact.ComponentChildren;
    details?: preact.ComponentChildren;
};
/**
 * Preact JSX string-only versions of field slot props.
 * Used in Preact module declarations after Omit-ing the ComponentChildren
 * versions (required by force-omit-react-slots lint rule).
 */
type FieldSlotPreactProps = {
    error?: string;
    details?: string;
};
/** Used when an element does not have children. */
interface PreactBaseElementProps<TClass extends HTMLElement> {
    /**
     * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
     * Essential for maintaining component state and optimizing re-renders when lists change.
     */
    key?: preact.Key;
    /**
     * A reference to access the underlying DOM element directly.
     * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
     */
    ref?: preact.Ref<TClass>;
    /**
     * The named slot to which this element is assigned in the parent component's shadow DOM.
     *
     * Used for advanced component composition with web components.
     */
    slot?: Lowercase<string>;
}
/** Used when an element has children. */
interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement> extends PreactBaseElementProps<TClass> {
    /**
     * The child elements to be rendered within this component.
     */
    children?: preact.ComponentChildren;
}

interface PolarisGlobal {
    /**
     * The shop's currency code, which may differ from the user's currency.
     */
    currencyCode: string;
    /**
     * The user's locale, which may differ from the shop's locale.
     */
    locale: string;
    /**
     * The released version of the admin-ui-components bundle. Baked in at build time.
     */
    version?: string;
    /**
     * Optional host-provided override for native-app (Shopify Mobile) detection.
     */
    isMobile?: boolean;
    translations: {
        loading: string;
        actions: {
            dismiss: string;
            clear: string;
            addFiles: string;
            removeChip: string;
            moreActions: string;
            /** Template for the add value chip. Use `{label}` as the placeholder. */
            addValue: string;
            /** Template for the edit value button in inline layout. Use `{label}` as the placeholder. */
            editValue: string;
            /**
             * Template naming the button that opens a value's actions overlay. Use
             * `{label}` as the placeholder. Optional: hosts predating this key fall
             * back to the bundled default rather than failing to typecheck.
             */
            valueActions?: string;
            /** Label shown when a read-only multi picker field has no values. */
            none: string;
        };
        pagination: {
            goToNextPage: string;
            goToPreviousPage: string;
        };
        datePicker: {
            label: string;
            rangeInstructions: string;
            singleInstructions: string;
            previousMonth: string;
            nextMonth: string;
        };
        colorPicker: {
            hueSliderLabel: string;
            alphaSliderLabel: string;
            thumbDescription: string;
            thumbLabel: string;
        };
        colorField: {
            colorPreviewDescription: string;
        };
        quickNumberField: {
            emptyLabel: string;
        };
        quickMoneyField: {
            emptyLabel: string;
        };
        quickTextField: {
            emptyLabel: string;
        };
        quickURLField: {
            emptyLabel: string;
        };
        quickEmailField: {
            emptyLabel: string;
        };
        quickLinkField: {
            emptyLabel: string;
            anchorTextPlaceholder: string;
            anchorTextAriaLabel: string;
            urlAriaLabel: string;
        };
        quickColorField: {
            emptyLabel: string;
        };
        quickDateField: {
            emptyLabel: string;
        };
        quickDateTimeField: {
            separator: string;
            am: string;
            pm: string;
            timeFieldLabel: string;
            dateFieldLabel: string;
        };
        secondaryActions: {
            overflowAccessibilityLabel: string;
            /** Fallback label for an action whose own accessible name is unavailable. */
            actionLabel?: string;
            /** Template announced when focus moves from an inline action into the overflow menu. */
            actionMovedToOverflow?: string;
        };
        breadcrumbs: {
            overflowAccessibilityLabel: string;
        };
        modal: {
            unsavedChanges: string;
            close: string;
        };
        dropZone: {
            fileTypeNotReady: string;
            dropFilesToUpload: string;
        };
        passwordField: {
            hidePassword: string;
            showPassword: string;
        };
        menu: {
            searchFieldLabel: string;
            searchFieldPlaceholder: string;
        };
        quickPickerField: {
            placeholder: string;
            searchPlaceholder: string;
        };
        quickJsonField: {
            editJson: string;
            done: string;
            cancel: string;
            formatJson: string;
            invalidJson: string;
        };
        quickMeasurementField: {
            defaultEmptyLabel: {
                weight: string;
                dimension: string;
                volume: string;
                distance: string;
                'antenna-gain': string;
                area: string;
                'battery-charge-capacity': string;
                'battery-energy-capacity': string;
                capacitance: string;
                concentration: string;
                'data-storage-capacity': string;
                'data-transfer-rate': string;
                'display-density': string;
                duration: string;
                'electric-current': string;
                'electrical-resistance': string;
                energy: string;
                frequency: string;
                illuminance: string;
                inductance: string;
                'luminous-flux': string;
                'mass-flow-rate': string;
                power: string;
                pressure: string;
                resolution: string;
                'rotational-speed': string;
                'sound-level': string;
                speed: string;
                temperature: string;
                'thermal-power': string;
                voltage: string;
                'volumetric-flow-rate': string;
            };
        };
        quickAddLabel?: string;
        quickShowMoreLabel?: string;
    };
}
declare global {
    var polaris: PolarisGlobal;
}

/**
 * Configure the following properties on the avatar component.
 * @publicDocs
 */
interface AvatarProps extends Required<Pick<AvatarProps$1, 'initials' | 'src' | 'alt' | 'size'>> {
    /**
     * The size of the avatar image.
     *
     * - `small-200`: Extra small avatar, suitable for compact displays or lists with many items.
     * - `small-100`: Alias of `small`.
     * - `small`: Small avatar, good for secondary contexts or tight layouts.
     * - `base`: Default size that works well in most contexts.
     * - `large`: Large avatar for emphasis or when the avatar is a focal point.
     * - `large-100`: Alias of `large`.
     * - `large-200`: Extra large avatar for prominent display.
     */
    size: Extract<AvatarProps$1['size'], 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200'>;
    /**
     * Alternative text that describes the avatar for accessibility.
     *
     * Provides a text description of the avatar for users with assistive technology
     * and serves as a fallback when the avatar fails to load. A well-written description
     * enables people with visual impairments to understand non-text content.
     *
     * When a screen reader encounters an avatar, it reads this description aloud.
     * When an avatar fails to load, this text displays on screen, helping all users
     * understand what content was intended.
     *
     * Learn more about [writing effective alt text](https://www.shopify.com/ca/blog/image-alt-text#4)
     * and the [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
     */
    alt: Required<AvatarProps$1>['alt'];
    /**
     * The URL or path to the avatar image. When provided, the image takes priority over `initials`.
     * If the image fails to load or loads slowly, `initials` will be rendered as a fallback.
     */
    src: Required<AvatarProps$1>['src'];
    /**
     * The initials to display in the avatar when no image is provided or fails to load.
     * Typically one or two characters representing a person's first and last name initials, such as "JD" for John Doe.
     */
    initials: Required<AvatarProps$1>['initials'];
}

declare const tagName$Z = "s-avatar";
interface ReactProps$Z extends Partial<AvatarProps>, Pick<AvatarProps$1, 'id'> {
    /**
     * A callback fired when the avatar image loads successfully.
     */
    onLoad?: () => void;
    /**
     * A callback fired when the avatar image fails to load.
     */
    onError?: () => void;
}

/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/togglePopover) */
interface PopoverTogglePopoverOptions {
    force?: boolean;
    source?: HTMLElement;
}
/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/showPopover) */
interface PopoverShowPopoverOptions {
    source?: HTMLElement;
}
interface PopoverToggleTargetElementInvoker {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/popoverTargetAction) */
    popoverTargetAction: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/popoverTargetElement) */
    popoverTargetElement: Element | null;
}
interface PopoverPolyfillOptions {
    layerName?: string;
}

declare global {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ToggleEvent) */
    interface ToggleEvent extends Event {
        /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ToggleEvent/newState) */
        readonly newState: string;
        /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ToggleEvent/oldState) */
        readonly oldState: string;
    }
    interface HTMLElement {
        /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/popover) */
        popover: string | null;
        /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidePopover) */
        hidePopover(): void;
        /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/showPopover) */
        showPopover(options?: PopoverShowPopoverOptions): void;
        /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/togglePopover) */
        togglePopover(force?: boolean): boolean;
        /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/togglePopover) */
        togglePopover(options?: PopoverTogglePopoverOptions): boolean;
    }
    interface HTMLButtonElement extends PopoverToggleTargetElementInvoker {
    }
    interface HTMLInputElement extends PopoverToggleTargetElementInvoker {
    }
    interface Window {
        ToggleEvent: ToggleEvent;
        POPOVER_POLYFILL_OPTIONS?: PopoverPolyfillOptions;
    }
}

declare class PolarisCustomElement extends PreactCustomElement {
    constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
    /** @private */
    connectedCallback(): void;
    /** @private */
    adoptedCallback(): void;
}

/**
 * Configure the following properties on the avatar component.
 * @publicDocs
 */
declare class Avatar extends PolarisCustomElement implements AvatarProps {
    initials: AvatarProps['initials'];
    src: AvatarProps['src'];
    size: AvatarProps['size'];
    alt: AvatarProps['alt'];
    onload: CallbackEventListener<typeof tagName$Z> | null;
    onerror: OnErrorEventHandler;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$Z]: Avatar;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$Z]: ReactProps$Z & PreactBaseElementProps<Avatar>;
        }
    }
}

type IconType = "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle" | "align-horizontal-centers" | "app-extension" | "apps" | "archive" | "arrow-down" | "arrow-down-circle" | "arrow-left" | "arrow-left-circle" | "arrow-right" | "arrow-right-circle" | "arrow-up" | "arrow-up-circle" | "arrow-up-right" | "arrows-in-horizontal" | "arrows-out-horizontal" | "arrows-out-horizontal-filled" | "asterisk" | "attachment" | "automation" | "automation-filled" | "backspace" | "bag" | "bank" | "barcode" | "bill" | "bill-filled" | "blank" | "blank-filled" | "blog" | "blog-filled" | "bolt" | "bolt-filled" | "book" | "book-open" | "brain" | "bug" | "bullet" | "business-entity" | "button" | "button-press" | "calculator" | "calendar" | "calendar-check" | "calendar-compare" | "calendar-list" | "calendar-time" | "camera" | "camera-flip" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "cart" | "cart-abandoned" | "cart-abandoned-filled" | "cart-discount" | "cart-down" | "cart-down-filled" | "cart-sale" | "cart-up" | "cash-dollar" | "cash-euro" | "cash-pound" | "cash-rupee" | "cash-yen" | "catalog-product" | "categories" | "channels" | "chart-cohort" | "chart-donut" | "chart-funnel" | "chart-histogram-first" | "chart-histogram-first-last" | "chart-histogram-flat" | "chart-histogram-full" | "chart-histogram-growth" | "chart-histogram-last" | "chart-histogram-second-last" | "chart-horizontal" | "chart-line" | "chart-popular" | "chart-stacked" | "chart-vertical" | "chat" | "chat-new" | "chat-referral" | "check" | "check-circle" | "check-circle-filled" | "checkbox" | "chevron-down" | "chevron-down-circle" | "chevron-left" | "chevron-left-circle" | "chevron-right" | "chevron-right-circle" | "chevron-up" | "chevron-up-circle" | "circle" | "circle-dashed" | "clipboard" | "clipboard-check" | "clipboard-checklist" | "clock" | "clock-list" | "clock-revert" | "code" | "code-add" | "collection" | "collection-featured" | "collection-filled" | "collection-list" | "collection-reference" | "color" | "color-none" | "compass" | "compose" | "confetti" | "connect" | "content" | "contract" | "corner-pill" | "corner-round" | "corner-square" | "credit-card" | "credit-card-cancel" | "credit-card-percent" | "credit-card-reader" | "credit-card-reader-chip" | "credit-card-reader-tap" | "credit-card-secure" | "credit-card-tap-chip" | "crop" | "currency-convert" | "cursor" | "cursor-banner" | "cursor-option" | "data-presentation" | "data-table" | "database" | "database-add" | "database-connect" | "delete" | "delivery" | "desktop" | "disabled" | "discount" | "discount-add" | "discount-code" | "dns-settings" | "dock-floating" | "dock-side" | "domain" | "domain-landing-page" | "domain-new" | "domain-redirect" | "download" | "drag-drop" | "drag-handle" | "duplicate" | "edit" | "email" | "email-follow-up" | "email-newsletter" | "enabled" | "enter" | "envelope" | "envelope-soft-pack" | "eraser" | "exchange" | "exit" | "export" | "external" | "eye-check-mark" | "eye-dropper" | "eye-dropper-list" | "eye-first" | "eyeglasses" | "favicon" | "file" | "file-filled" | "file-list" | "filter" | "filter-active" | "flag" | "flip-horizontal" | "flip-vertical" | "flower" | "folder" | "folder-add" | "folder-down" | "folder-remove" | "folder-up" | "food" | "foreground" | "forklift" | "forms" | "games" | "gauge" | "gauge-filled" | "generated-app" | "generated-app-filled" | "gift-card" | "git-branch" | "git-commit" | "git-repository" | "globe" | "globe-asia" | "globe-asia-filled" | "globe-europe" | "globe-europe-filled" | "globe-filled" | "globe-lines" | "globe-list" | "grid" | "hashtag" | "hashtag-decimal" | "hashtag-list" | "heart" | "hide" | "hide-filled" | "home" | "icons" | "identity-card" | "identity-card-filled" | "image" | "image-add" | "image-alt" | "image-explore" | "image-magic" | "image-none" | "image-with-text-overlay" | "images" | "import" | "in-progress" | "incentive" | "incoming" | "incomplete" | "info" | "inheritance" | "inventory" | "inventory-filled" | "inventory-updated" | "iq" | "key" | "keyboard" | "keyboard-filled" | "keyboard-hide" | "label-printer" | "language" | "language-translate" | "layer" | "layout-block" | "layout-block-ai" | "layout-buy-button" | "layout-buy-button-horizontal" | "layout-buy-button-vertical" | "layout-column-1" | "layout-columns-2" | "layout-columns-3" | "layout-footer" | "layout-header" | "layout-logo-block" | "layout-popup" | "layout-rows-2" | "layout-section" | "layout-sidebar-left" | "layout-sidebar-right" | "lightbulb" | "link" | "link-list" | "list-bulleted" | "list-bulleted-filled" | "list-numbered" | "live" | "live-filled" | "location" | "location-none" | "lock" | "logo-apple-tap-to-pay-filled" | "magic" | "map" | "markets" | "markets-euro" | "markets-euro-filled" | "markets-rupee" | "markets-rupee-filled" | "markets-yen" | "markets-yen-filled" | "maximize" | "measurement-size" | "measurement-size-list" | "measurement-volume" | "measurement-volume-list" | "measurement-weight" | "measurement-weight-list" | "media-receiver" | "megaphone" | "megaphone-filled" | "mention" | "menu" | "menu-horizontal" | "menu-vertical" | "merge" | "metafields" | "metaobject" | "metaobject-filled" | "metaobject-list" | "metaobject-reference" | "microphone" | "microphone-muted" | "minimize" | "minus" | "minus-circle" | "mobile" | "money" | "money-filled" | "money-none" | "moon" | "nature" | "note" | "note-add" | "notification" | "number-one" | "order" | "order-batches" | "order-draft" | "order-draft-filled" | "order-first" | "order-fulfilled" | "order-repeat" | "order-unfulfilled" | "orders-status" | "organization" | "outdent" | "outgoing" | "package" | "package-fulfilled" | "package-on-hold" | "package-returned" | "page" | "page-add" | "page-attachment" | "page-clock" | "page-down" | "page-heart" | "page-list" | "page-reference" | "page-remove" | "page-report" | "page-up" | "pagination-end" | "pagination-start" | "paint-brush-flat" | "paint-brush-round" | "paper-check" | "passkey" | "passkey-filled" | "paste" | "pause-circle" | "payment" | "payment-capture" | "payout" | "payout-dollar" | "payout-euro" | "payout-pound" | "payout-rupee" | "payout-yen" | "person" | "person-add" | "person-exit" | "person-list" | "person-lock" | "person-remove" | "person-segment" | "personalized-text" | "phone" | "phone-down" | "phone-down-filled" | "phone-in" | "phone-out" | "pin" | "pin-filled" | "pin-remove" | "plan" | "play" | "play-circle" | "plus" | "plus-circle" | "plus-circle-down" | "plus-circle-filled" | "plus-circle-up" | "point-of-sale" | "price-list" | "price-list-filled" | "print" | "product" | "product-add" | "product-cost" | "product-list" | "product-reference" | "product-remove" | "product-return" | "product-unavailable" | "profile" | "profile-filled" | "question-circle" | "question-circle-filled" | "radio-control" | "rank-bottom" | "rank-top" | "receipt" | "receipt-dollar" | "receipt-euro" | "receipt-euro-filled" | "receipt-paid" | "receipt-pound" | "receipt-pound-filled" | "receipt-refund" | "receipt-rupee" | "receipt-rupee-filled" | "receipt-yen" | "receipt-yen-filled" | "receivables" | "redo" | "referral-code" | "refresh" | "remove-background" | "replace" | "replay" | "reset" | "return" | "reward" | "rocket" | "rotate-left" | "rotate-right" | "sandbox" | "save" | "search" | "search-add" | "search-list" | "search-recent" | "search-resource" | "select" | "send" | "settings" | "share" | "shield-check-mark" | "shield-network" | "shield-none" | "shield-pending" | "shield-person" | "shipping-label" | "shipping-label-filled" | "shopcodes" | "slideshow" | "smiley-happy" | "smiley-joy" | "smiley-neutral" | "smiley-sad" | "social-ad" | "social-post" | "sort" | "sort-ascending" | "sort-descending" | "sound" | "split" | "sports" | "star" | "star-filled" | "star-list" | "status" | "status-active" | "stop-circle" | "store" | "store-import" | "store-managed" | "store-online" | "sun" | "table" | "table-masonry" | "tablet" | "target" | "tax" | "team" | "text" | "text-ai" | "text-align-center" | "text-align-left" | "text-align-right" | "text-block" | "text-bold" | "text-color" | "text-font" | "text-font-list" | "text-grammar" | "text-in-columns" | "text-in-rows" | "text-in-rows-filled" | "text-indent" | "text-italic" | "text-quote" | "text-title" | "text-underline" | "text-with-image" | "theme" | "theme-cart" | "theme-edit" | "theme-store" | "theme-template" | "three-d-environment" | "thumbs-down" | "thumbs-up" | "tip-jar" | "toggle-off" | "toggle-on" | "transaction" | "transaction-fee-dollar" | "transaction-fee-euro" | "transaction-fee-pound" | "transaction-fee-rupee" | "transaction-fee-yen" | "transfer" | "transfer-in" | "transfer-internal" | "transfer-out" | "undo" | "unknown-device" | "unlock" | "upload" | "variant" | "variant-list" | "video" | "video-list" | "view" | "viewport-narrow" | "viewport-short" | "viewport-tall" | "viewport-wide" | "wallet" | "wallet-filled" | "wand" | "watch" | "wifi" | "work" | "work-filled" | "work-list" | "wrench" | "x" | "x-circle";

/**
 * Configure the following properties on the icon component.
 * @publicDocs
 */
interface IconProps extends Required<Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size' | 'interestFor'>> {
    /**
     * The icon to display from the icon library.
     *
     * Set to a valid icon name to display that icon. To hide the icon completely,
     * use an empty string `''`. To reserve the icon's space without displaying an icon,
     * use `'empty'`.
     */
    type: '' | IconType | 'empty';
    /**
     * The semantic meaning and color treatment of the component.
     *
     * - `info`: Informational content or helpful tips.
     * - `success`: Positive outcomes or successful states.
     * - `warning`: Important warnings about potential issues.
     * - `critical`: Urgent problems or destructive actions.
     * - `auto`: Automatically determined based on context.
     * - `neutral`: General information without specific intent.
     * - `caution`: Advisory notices that need attention.
     *
     * @default 'auto'
     */
    tone: Extract<IconProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'>;
    /**
     * The color emphasis level that controls visual intensity.
     *
     * - `base`: Primary color for body text, standard UI elements, and general content with good readability.
     * - `subdued`: Deemphasized color for secondary text, supporting labels, and less critical interface elements.
     *
     * @default 'base'
     */
    color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
    /**
     * The size of the icon.
     *
     * - `small`: Smaller icon suitable for inline use within text or compact UI elements.
     * - `base`: Default size that works well for standalone icons and standard use cases.
     */
    size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

/**
 * Configure the following properties on the badge component.
 * @publicDocs
 */
interface BadgeProps extends Pick<BadgeProps$1, 'color' | 'icon' | 'size' | 'tone'> {
    /**
     * Controls the visual weight and emphasis of the badge.
     *
     * - `base`: Standard weight with moderate emphasis, suitable for most use cases.
     * - `strong`: Increased visual weight for higher emphasis and prominence.
     *
     * @default 'base'
     */
    color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
    /**
     * An icon displayed inside the badge to provide additional visual context or reinforce the badge's meaning.
     * Accepts any icon name from the icon library or a custom string identifier.
     *
     * @default ''
     */
    icon: IconProps['type'] | '';
    /**
     * The size of the badge.
     *
     * - `base`: Default size suitable for most badge use cases.
     * - `large`: Larger badge for increased visibility and prominence.
     * - `large-100`: Extra large badge for maximum visibility in emphasized contexts.
     */
    size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
    /**
     * The semantic meaning and color treatment of the component.
     *
     * - `info`: Informational content or helpful tips.
     * - `success`: Positive outcomes or successful states.
     * - `warning`: Important warnings about potential issues.
     * - `critical`: Urgent problems or destructive actions.
     * - `auto`: Automatically determined based on context.
     * - `neutral`: General information without specific intent.
     * - `caution`: Advisory notices that need attention.
     *
     * @default 'auto'
     */
    tone: Extract<BadgeProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'>;
}

declare const tagName$Y = "s-badge";
interface ReactProps$Y extends Partial<BadgeProps>, Pick<BadgeProps$1, 'id' | 'children'> {
    /**
     * The text label displayed within the badge component, typically a short status indicator or category label.
     */
    children?: ComponentChildren$1;
}

declare abstract class BadgeBase extends PolarisCustomElement implements Pick<BadgeProps, 'color' | 'size'> {
    color: BadgeProps['color'];
    size: BadgeProps['size'];
    abstract tone: string;
    abstract icon: string;
    constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * Configure the following properties on the badge component.
 * @publicDocs
 */
declare class Badge extends BadgeBase implements BadgeProps {
    icon: BadgeProps['icon'];
    tone: BadgeProps['tone'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$Y]: Badge;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$Y]: ReactProps$Y & PreactBaseElementPropsWithChildren<Badge>;
        }
    }
}

type RequiredBannerProps = Required<BannerProps$1>;
/**
 * Configure the following properties on the banner component.
 * @publicDocs
 */
interface BannerProps extends Pick<RequiredBannerProps, 'heading' | 'dismissible' | 'hidden' | 'tone'> {
    /**
     * The semantic meaning and color treatment of the component.
     *
     * - `info`: Informational content or helpful tips.
     * - `success`: Positive outcomes or successful states.
     * - `warning`: Important warnings about potential issues.
     * - `critical`: Urgent problems or destructive actions.
     * - `auto`: Automatically determined based on context.
     *
     * @default 'auto'
     */
    tone: Extract<RequiredBannerProps['tone'], 'auto' | 'critical' | 'warning' | 'success' | 'info'>;
    /**
     * The heading text displayed at the top of the banner.
     *
     * @default ''
     */
    heading: RequiredBannerProps['heading'];
    /**
     * Whether the banner displays a close button that allows users to dismiss it.
     *
     * When the close button is pressed, the `dismiss` event fires, then `hidden` is set to `true`,
     * any animation completes, and the `afterhide` event fires.
     *
     * @default false
     */
    dismissible: RequiredBannerProps['dismissible'];
    /**
     * Controls whether the banner is visible or hidden.
     *
     * When using a controlled component pattern and the banner is `dismissible`,
     * update this property to `true` when the `dismiss` event fires.
     *
     * You can hide the banner programmatically by setting this to `true` even if it's not `dismissible`.
     *
     * @default false
     */
    hidden: RequiredBannerProps['hidden'];
}

declare const tagName$X = "s-banner";
interface ReactProps$X extends Partial<BannerProps>, Pick<BannerProps$1, 'id' | 'children'> {
    /**
     * The main message content displayed within the banner component, providing important information or guidance to users.
     */
    children?: ComponentChildren$1;
    /**
     * Action buttons displayed at the bottom of the banner that let users respond to the message.
     * Accepts up to two button components with `variant="secondary"` or `variant="auto"`.
     */
    secondaryActions?: ComponentChildren$1;
    /**
     * A callback fired when the user dismisses the banner by clicking the close button.
     * Use this to update your app state and control the banner's visibility.
     */
    onDismiss?: ((event: CallbackEvent<typeof tagName$X>) => void) | null;
    /**
     * A callback fired when the banner is completely hidden, after any hide animations have completed.
     * Use this to perform cleanup or trigger subsequent actions after the banner is no longer visible.
     */
    onAfterHide?: ((event: CallbackEvent<typeof tagName$X>) => void) | null;
}

/**
 * Configure the following properties on the banner component.
 * @publicDocs
 */
declare class Banner extends PolarisCustomElement implements BannerProps {
    heading: BannerProps['heading'];
    tone: BannerProps['tone'];
    hidden: BannerProps['hidden'];
    dismissible: BannerProps['dismissible'];
    ondismiss: CallbackEventListener<typeof tagName$X> | null;
    onafterhide: CallbackEventListener<typeof tagName$X> | null;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$X]: Banner;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$X]: Omit<ReactProps$X, 'secondaryActions'> & PreactBaseElementPropsWithChildren<Banner>;
        }
    }
}

type MakeResponsive<T> = T | `@container${string}`;
/**
 * Makes a property's value potentially responsive.
 *
 * @example
 * type Example = {
 *   color: boolean;
 *   margin: string;
 *   padding: number;
 * }
 * type Result = MakeResponsivePick<Example, 'color' | 'margin' | 'padding'>;
 * // Result = {
 *   color: boolean | `@container${string}`;
 *   margin: string | `@container${string}`;
 *   padding: number | `@container${string}`;
 * }
 */
type MakeResponsivePick<TType, TProperty extends keyof TType> = {
    [P in TProperty]: MakeResponsive<TType[P]>;
};

type RequiredBoxProps = Required<BoxProps$1>;
type BoxBorderRadii = Extract<RequiredBoxProps['borderRadius'], 'none' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200'>;
type BoxBorderStyles = Extract<RequiredBoxProps['borderStyle'], 'none' | 'solid' | 'dashed' | 'auto'>;
type ResponsiveBoxProps = MakeResponsivePick<RequiredBoxProps, 'padding' | 'paddingBlock' | 'paddingBlockStart' | 'paddingBlockEnd' | 'paddingInline' | 'paddingInlineStart' | 'paddingInlineEnd' | 'display'>;
interface BoxProps extends Pick<RequiredBoxProps, 'accessibilityLabel' | 'accessibilityRole' | 'accessibilityVisibility' | 'background' | 'blockSize' | 'border' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'inlineSize' | 'maxBlockSize' | 'maxInlineSize' | 'minBlockSize' | 'minInlineSize' | 'overflow'> {
    /**
     * The background color of the component.
     *
     * @default 'transparent'
     */
    background: Extract<RequiredBoxProps['background'], 'transparent' | 'base' | 'subdued' | 'strong'>;
    /**
     * A border applied using shorthand syntax to specify width, color, and style in a single property.
     *
     * @default 'none'
     */
    border: RequiredBoxProps['border'];
    /**
     * The thickness of the border on all sides.
     *
     * When set, this overrides the width value specified in the `border` property.
     * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different widths per side.
     *
     * @default '' - meaning no override
     */
    borderWidth: MaybeAllValuesShorthandProperty<Extract<RequiredBoxProps['borderWidth'], 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'none'>> | Extract<RequiredBoxProps['borderWidth'], ''>;
    /**
     * The visual style of the border on all sides, such as solid, dashed, or dotted.
     *
     * When set, this overrides the style value specified in the `border` property.
     * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different styles per side.
     *
     * @default '' - meaning no override
     */
    borderStyle: MaybeAllValuesShorthandProperty<BoxBorderStyles> | Extract<RequiredBoxProps['borderStyle'], ''>;
    /**
     * The color of the border using the design system's color scale.
     *
     * When set, this overrides the color value specified in the `border` property.
     * Choose from `subdued`, `base`, or `strong` to match the visual emphasis needed.
     *
     * @default '' - meaning no override
     */
    borderColor: Extract<RequiredBoxProps['borderColor'], 'subdued' | 'base' | 'strong' | ''>;
    /**
     * The roundedness of the element's corners using the design system's radius scale.
     *
     * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different radii per corner. Use this to create rounded corners or fully rounded elements.
     *
     * @default 'none'
     */
    borderRadius: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
    /**
     * The padding applied to all edges of the component.
     *
     * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) using flow-relative values:
     * - 1 value applies to all sides
     * - 2 values apply to block (top/bottom) and inline (left/right)
     * - 3 values apply to block-start (top), inline (left/right), and block-end (bottom)
     * - 4 values apply to block-start (top), inline-end (right), block-end (bottom), and inline-start (left)
     *
     * **Examples:** `base`, `large none`, `base large-100 base small`
     *
     * Use `auto` to inherit padding from the nearest container with removed padding. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
     *
     * @default 'none'
     */
    padding: ResponsiveBoxProps['padding'];
    /**
     * The block-direction padding (top and bottom in horizontal writing modes).
     *
     * Accepts a single value for both sides or two space-separated values for block-start and block-end.
     *
     * **Example:** `large none` applies `large` to the top and `none` to the bottom.
     *
     * Overrides the block value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
     *
     * @default '' - meaning no override
     */
    paddingBlock: ResponsiveBoxProps['paddingBlock'];
    /**
     * The block-start padding (top in horizontal writing modes).
     *
     * Overrides the block-start value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
     *
     * @default '' - meaning no override
     */
    paddingBlockStart: ResponsiveBoxProps['paddingBlockStart'];
    /**
     * The block-end padding (bottom in horizontal writing modes).
     *
     * Overrides the block-end value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
     *
     * @default '' - meaning no override
     */
    paddingBlockEnd: ResponsiveBoxProps['paddingBlockEnd'];
    /**
     * The inline-direction padding (left and right in horizontal writing modes).
     *
     * Accepts a single value for both sides or two space-separated values for inline-start and inline-end.
     *
     * **Example:** `large none` applies `large` to the left and `none` to the right.
     *
     * Overrides the inline value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
     *
     * @default '' - meaning no override
     */
    paddingInline: ResponsiveBoxProps['paddingInline'];
    /**
     * The inline-start padding (left in LTR writing modes, right in RTL).
     *
     * Overrides the inline-start value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
     *
     * @default '' - meaning no override
     */
    paddingInlineStart: ResponsiveBoxProps['paddingInlineStart'];
    /**
     * The inline-end padding (right in LTR writing modes, left in RTL).
     *
     * Overrides the inline-end value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
     *
     * @default '' - meaning no override
     */
    paddingInlineEnd: ResponsiveBoxProps['paddingInlineEnd'];
    /**
     * The outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
     *
     * - `auto` the component's initial value. The actual value depends on the component and context.
     * - `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
     *
     * @default 'auto'
     */
    display: ResponsiveBoxProps['display'];
    /**
     * The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes).
     *
     * Block size adjusts based on the writing direction: in horizontal layouts, it controls the height;
     * in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.
     *
     * Learn more about [block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
     *
     * @default 'auto'
     */
    blockSize: SizeUnitsOrAuto;
    /**
     * The minimum height in horizontal writing modes, or minimum width in vertical writing modes.
     * Prevents the element from shrinking below this size.
     *
     * Learn more about [min-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
     *
     * @default '0'
     */
    minBlockSize: SizeUnits;
    /**
     * The maximum height in horizontal writing modes, or maximum width in vertical writing modes.
     * Prevents the element from growing beyond this size.
     *
     * Learn more about [max-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
     *
     * @default 'none'
     */
    maxBlockSize: SizeUnitsOrNone;
    /**
     * The width in horizontal writing modes, or height in vertical writing modes.
     * Use this for flow-relative sizing that adapts to text direction. Learn more about [inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
     *
     * @default 'auto'
     */
    inlineSize: SizeUnitsOrAuto;
    /**
     * The minimum width in horizontal writing modes, or minimum height in vertical writing modes.
     * Prevents the element from shrinking below this size.
     *
     * Learn more about [min-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
     *
     * @default '0'
     */
    minInlineSize: SizeUnits;
    /**
     * The maximum width in horizontal writing modes, or maximum height in vertical writing modes.
     * Prevents the element from growing beyond this size.
     *
     * Learn more about [max-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
     *
     * @default 'none'
     */
    maxInlineSize: SizeUnitsOrNone;
}

declare const tagName$W = "s-box";
interface ReactProps$W extends Partial<BoxProps>, Pick<BoxProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the box component, which serves as a flexible container for organizing and styling other components.
     */
    children?: ComponentChildren$1;
}

declare class BoxElement extends PolarisCustomElement implements BoxProps {
    constructor(renderImpl: RenderImpl);
    accessibilityRole: BoxProps['accessibilityRole'];
    background: BoxProps['background'];
    blockSize: BoxProps['blockSize'];
    minBlockSize: BoxProps['minBlockSize'];
    maxBlockSize: BoxProps['maxBlockSize'];
    inlineSize: BoxProps['inlineSize'];
    minInlineSize: BoxProps['minInlineSize'];
    maxInlineSize: BoxProps['maxInlineSize'];
    overflow: BoxProps['overflow'];
    padding: BoxProps['padding'];
    paddingBlock: BoxProps['paddingBlock'];
    paddingBlockStart: BoxProps['paddingBlockStart'];
    paddingBlockEnd: BoxProps['paddingBlockEnd'];
    paddingInline: BoxProps['paddingInline'];
    paddingInlineStart: BoxProps['paddingInlineStart'];
    paddingInlineEnd: BoxProps['paddingInlineEnd'];
    border: BoxProps['border'];
    borderWidth: BoxProps['borderWidth'];
    borderStyle: BoxProps['borderStyle'];
    borderColor: BoxProps['borderColor'];
    borderRadius: BoxProps['borderRadius'];
    accessibilityLabel: BoxProps['accessibilityLabel'];
    accessibilityVisibility: BoxProps['accessibilityVisibility'];
    display: BoxProps['display'];
}

/**
 * Configure the following properties on the box component.
 * @publicDocs
 */
declare class Box extends BoxElement implements BoxProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$W]: Box;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$W]: ReactProps$W & PreactBaseElementPropsWithChildren<Box>;
        }
    }
}

type ButtonOnlyProps = Extract<ButtonProps$1, {
    type?: unknown;
}>;
type ButtonBaseProps = Required<Pick<ButtonOnlyProps, 'accessibilityLabel' | 'disabled' | 'command' | 'commandFor' | 'icon' | 'interestFor' | 'lang' | 'loading' | 'type' | 'tone' | 'variant' | 'target' | 'href' | 'download' | 'inlineSize'>>;
/**
 * Configure the following properties on the button component.
 * @publicDocs
 */
interface ButtonProps extends ButtonBaseProps {
    /**
     * The semantic meaning and color treatment of the component.
     *
     * - `critical`: Urgent problems or destructive actions.
     * - `auto`: Automatically determined based on context.
     * - `neutral`: General information without specific intent.
     *
     * @default 'auto'
     */
    tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
    /**
     * An icon displayed inside the button, typically positioned before the button text.
     * Use icons to help users quickly identify the button's action or to improve scannability.
     * Accepts any icon name from the icon library or a custom string identifier.
     *
     * @default ''
     */
    icon: IconProps['type'];
    /**
     * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
     */
    accessibilityLabel: Required<ButtonOnlyProps>['accessibilityLabel'];
    /**
     * The visual appearance of the button component.
     *
     * - `auto`: The variant is automatically determined by the button component's context.
     * - `primary`: High emphasis button for the primary action on the page. Should be used sparingly.
     * - `secondary`: Medium emphasis button for secondary actions.
     * - `tertiary`: Low emphasis button for less important actions.
     *
     * @default 'auto'
     */
    variant: Required<ButtonOnlyProps>['variant'];
    /**
     * The language of the text content. Use this when the text is in a different language than the rest of the page, allowing assistive technologies such as screen readers to invoke the correct pronunciation. The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
     */
    lang: Required<ButtonOnlyProps>['lang'];
}

declare const tagName$V = "s-button";
interface ReactProps$V extends Partial<ButtonProps>, Pick<ButtonProps$1, 'id' | 'children'> {
    /**
     * The label text or elements displayed inside the button component, describing the action that will be performed when clicked.
     */
    children?: ComponentChildren$1;
    /**
     * A callback fired when the button is clicked.
     */
    onClick?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
    /**
     * A callback fired when the button receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
    /**
     * A callback fired when the button loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
}

interface PreactOverlayControlProps extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
    /**
     * The action that [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this component is activated.
     *
     * - `--auto`: A default action for the target component.
     * - `--show`: Shows the target component.
     * - `--hide`: Hides the target component.
     * - `--toggle`: Toggles the visibility of the target component.
     *
     * @default '--auto'
     */
    command: Extract<InteractionProps['command'], '--show' | '--hide' | '--toggle' | '--auto'>;
    /**
     * The component that [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this component is activated.
     */
    commandFor: Extract<InteractionProps['commandFor'], string>;
    /**
     * The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information.
     */
    interestFor: Extract<InteractionProps['interestFor'], string>;
}

declare const ButtonBase_base: (abstract new (renderImpl: Omit<RenderImpl, "globalShadowCSS">) => PolarisCustomElement & PreactOverlayControlProps) & Pick<typeof PolarisCustomElement, "prototype" | "observedAttributes">;
declare abstract class ButtonBase<TTagName extends keyof HTMLElementTagNameMap> extends ButtonBase_base implements Pick<ButtonProps, 'disabled' | 'loading' | 'target' | 'href' | 'download' | 'type' | 'accessibilityLabel' | 'inlineSize'> {
    disabled: ButtonProps['disabled'];
    loading: ButtonProps['loading'];
    target: ButtonProps['target'];
    href: ButtonProps['href'];
    download: ButtonProps['download'];
    type: ButtonProps['type'];
    accessibilityLabel: ButtonProps['accessibilityLabel'];
    inlineSize: ButtonProps['inlineSize'];
    abstract icon: string;
    abstract variant: string;
    abstract tone: string;
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the button component.
 * @publicDocs
 */
declare class Button extends ButtonBase<typeof tagName$V> implements ButtonProps {
    icon: ButtonProps['icon'];
    variant: ButtonProps['variant'];
    tone: ButtonProps['tone'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$V]: Button;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$V]: ReactProps$V & PreactBaseElementPropsWithChildren<Button>;
        }
    }
}

/**
 * Configure the following properties on the button group component.
 * @publicDocs
 */
interface ButtonGroupProps extends Required<Pick<ButtonGroupProps$1, 'gap' | 'accessibilityLabel'>> {
    /**
     * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
     *
     * @implementation Used as a hidden heading or an aria-label on the wrapping element.
     */
    accessibilityLabel: Required<ButtonGroupProps$1>['accessibilityLabel'];
    /**
     * The spacing between buttons in the group.
     *
     * - `base`: Standard spacing that provides clear visual separation between buttons.
     * - `none`: No spacing, creating a connected button group.
     *
     * @default 'base'
     */
    gap: Required<ButtonGroupProps$1>['gap'];
}

declare const tagName$U = "s-button-group";
interface ReactProps$U extends Partial<ButtonGroupProps>, Pick<ButtonGroupProps$1, 'id' | 'children'> {
    /**
     * The buttons displayed within the button group component, which are arranged together as a cohesive set of related actions.
     */
    children?: ComponentChildren$1;
    /**
     * The main action for this group, displayed with high visual emphasis.
     * Accepts a single button with `variant="primary"`.
     *
     * Use this for the primary action you want users to take. This can't be used when `gap="none"`.
     */
    primaryAction?: ComponentChildren$1;
    /**
     * Supporting actions displayed with less emphasis than the primary action.
     * Accepts one or more button components with `variant="secondary"` or `variant="auto"`.
     *
     * Use these for alternative or less critical actions.
     */
    secondaryActions?: ComponentChildren$1;
}

declare abstract class ButtonGroupBase extends PolarisCustomElement implements Pick<ButtonGroupProps, 'gap' | 'accessibilityLabel'> {
    gap: ButtonGroupProps['gap'];
    accessibilityLabel: ButtonGroupProps['accessibilityLabel'];
    constructor(renderImpl: RenderImpl);
    /**
     * Actions whose translucent fill can't paint over a seam, so the neighbour
     * has to be told not to draw it. The foundation resolves the list.
     * @private
     */
    setInertActions(actions: readonly Element[]): void;
    /** @private */
    disconnectedCallback(): void;
}

/**
 * Configure the following properties on the button group component.
 * @publicDocs
 */
declare class ButtonGroup extends ButtonGroupBase implements ButtonGroupProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$U]: ButtonGroup;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$U]: Omit<ReactProps$U, 'primaryAction' | 'secondaryActions'> & PreactBaseElementPropsWithChildren<ButtonGroup>;
        }
    }
}

declare const internals$4: unique symbol;
type PreactInputProps = Required<Pick<TextFieldProps$1, 'disabled' | 'id' | 'name' | 'value'>>;
declare class PreactInputElement extends PolarisCustomElement implements PreactInputProps {
    static formAssociated: boolean;
    /** @private */
    [internals$4]: ElementInternals;
    disabled: PreactInputProps['disabled'];
    id: PreactInputProps['id'];
    name: PreactInputProps['name'];
    get value(): PreactInputProps["value"];
    set value(value: PreactInputProps['value']);
    constructor(renderImpl: RenderImpl);
}

interface PreactCheckboxProps extends Required<Pick<CheckboxProps$1, 'accessibilityLabel' | 'checked' | 'defaultChecked' | 'details' | 'error' | 'label' | 'required' | 'name' | 'disabled'>> {
    /**
     * The value used in form data when the control is checked.
     */
    value: Required<CheckboxProps$1>['value'];
}
declare class PreactCheckboxElement extends PreactInputElement implements PreactCheckboxProps {
    get checked(): boolean;
    set checked(checked: PreactCheckboxProps['checked']);
    /**
     * The value used in form data when the control is checked.
     */
    get value(): string;
    set value(value: string);
    defaultChecked: PreactCheckboxProps['defaultChecked'];
    accessibilityLabel: PreactCheckboxProps['accessibilityLabel'];
    details: PreactCheckboxProps['details'];
    error: PreactCheckboxProps['error'];
    label: PreactCheckboxProps['label'];
    required: PreactCheckboxProps['required'];
    /** @private */
    formResetCallback(): void;
    static get observedAttributes(): string[];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the checkbox component.
 * @publicDocs
 */
interface CheckboxProps extends PreactCheckboxProps {
    /**
     * Whether the checkbox displays in an indeterminate state (neither checked nor unchecked),
     * typically used to indicate partial selection in hierarchical lists.
     *
     * This visual state takes priority over the `checked` prop in appearance only.
     * The form submission value is still determined by the `checked` prop.
     *
     * If `indeterminate` has not been explicitly set and hasn't been modified by user interaction,
     * it returns the value of `defaultIndeterminate`.
     */
    indeterminate: Required<CheckboxProps$1>['indeterminate'];
    /**
     * The initial indeterminate state for uncontrolled components. Use this when you want the checkbox to start
     * in an indeterminate state but don't need to control it afterward.
     *
     * This value applies until `indeterminate` is explicitly set or the user changes the checkbox state by clicking.
     *
     * @default false
     */
    defaultIndeterminate: Required<CheckboxProps$1>['defaultIndeterminate'];
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     *
     * @default false
     */
    required: Required<CheckboxProps$1>['required'];
    /**
     * Changes the visibility of the component's label.
     *
     * - `visible`: the label is visible to all users.
     * - `exclusive`: the label is visually hidden but remains in the accessibility tree.
     *
     * @default 'visible'
     */
    labelAccessibilityVisibility: Required<CheckboxProps$1>['labelAccessibilityVisibility'];
}

declare const tagName$T = "s-checkbox";
interface ReactProps$T extends Partial<Omit<CheckboxProps, 'error' | 'details'>>, Pick<CheckboxProps$1, 'id'>, FieldSlotInternalReactProps {
    /**
     * A callback fired when the checkbox state changes and the user has finished interacting with it.
     */
    onChange?: ((event: CallbackEvent<typeof tagName$T>) => void) | null;
    /**
     * A callback fired when the checkbox state changes, including intermediate states during user interaction.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$T>) => void) | null;
    onBlur?: ((event: CallbackEvent<typeof tagName$T>) => void) | null;
}

declare abstract class CheckboxBase extends PreactCheckboxElement implements Pick<CheckboxProps, 'defaultIndeterminate' | 'indeterminate' | 'labelAccessibilityVisibility'> {
    get indeterminate(): CheckboxProps["indeterminate"];
    set indeterminate(indeterminate: CheckboxProps['indeterminate']);
    defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
    labelAccessibilityVisibility: CheckboxProps['labelAccessibilityVisibility'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the checkbox component.
 * @publicDocs
 */
declare class Checkbox extends CheckboxBase implements CheckboxProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$T]: Checkbox;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$T]: Omit<ReactProps$T, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<Checkbox>;
        }
    }
}

/**
 * Configure the following properties on the chip component.
 * @publicDocs
 */
interface ChipProps extends Required<Pick<ChipProps$1, 'color' | 'accessibilityLabel' | 'removable'>> {
    /**
     * The color emphasis level that controls visual intensity.
     *
     * @default 'base'
     */
    color: Required<ChipProps$1>['color'];
    /**
     * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
     */
    accessibilityLabel: Required<ChipProps$1>['accessibilityLabel'];
}

declare const tagName$S = "s-chip";
interface ReactProps$S extends Partial<ChipProps>, Pick<ChipProps$1, 'id' | 'children'> {
    /**
     * The text label displayed within the chip component, typically representing a selected filter, tag, or removable item.
     */
    children?: ComponentChildren$1;
    /**
     * An optional icon to display at the start of the chip. Accepts only icon components.
     */
    graphic?: ComponentChildren$1;
    onRemove?: ((event: CallbackEvent<typeof tagName$S>) => void) | null;
}

/**
 * Configure the following properties on the chip component.
 * @publicDocs
 */
declare class Chip extends PolarisCustomElement implements ChipProps {
    color: ChipProps['color'];
    accessibilityLabel: ChipProps['accessibilityLabel'];
    removable: ChipProps['removable'];
    onremove: CallbackEventListener<typeof tagName$S> | null;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$S]: Chip;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$S]: Omit<ReactProps$S, 'graphic'> & PreactBaseElementPropsWithChildren<Chip>;
        }
    }
}

/**
 * The choice component creates individual selectable options within a choice list. Use choice to define each option that merchants can select, supporting both single selection (radio buttons) and multiple selection (checkboxes) modes.
 *
 * Choice components support labels, help text, and custom content through slots, providing flexible option presentation within choice lists.
 * @publicDocs
 */
interface ChoiceProps extends Required<Pick<ChoiceProps$1, 'selected' | 'defaultSelected' | 'disabled' | 'accessibilityLabel' | 'value'>> {
}

declare const tagName$R = "s-choice";
interface ReactProps$R extends Partial<ChoiceProps>, Pick<ChoiceProps$1, 'id' | 'children' | 'details'> {
    /**
     * The label that identifies this selectable choice option to users.
     *
     * The label is produced by extracting and
     * concatenating the text nodes from the provided content;
     * any markup or element structure is ignored.
     */
    children?: ComponentChildren$1;
    /**
     * Additional text to provide context or guidance for the input.
     *
     * This text is displayed along with the input and its label
     * to offer more information or instructions to the user.
     *
     * @implementation this content should be linked to the input with an `aria-describedby` attribute.
     */
    details?: ComponentChildren$1;
    /**
     * Additional content to display below the choice label.
     * Can include rich content like TextFields, Buttons, or other interactive components.
     * Event handlers on React components are preserved.
     */
    secondaryContent?: ComponentChildren$1;
}

/**
 * The choice component creates individual selectable options within a choice list. Use choice to define each option that merchants can select, supporting both single selection (radio buttons) and multiple selection (checkboxes) modes.
 *
 * Choice components support labels, help text, and custom content through slots, providing flexible option presentation within choice lists.
 * @publicDocs
 */
declare class Choice extends PolarisCustomElement implements ChoiceProps {
    disabled: ChoiceProps['disabled'];
    get selected(): boolean;
    set selected(selected: ChoiceProps['selected']);
    value: ChoiceProps['value'];
    accessibilityLabel: ChoiceProps['accessibilityLabel'];
    defaultSelected: ChoiceProps['defaultSelected'];
    constructor();
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$R]: Choice;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$R]: Omit<ReactProps$R, 'details' | 'secondaryContent'> & PreactBaseElementPropsWithChildren<Choice>;
        }
    }
}

/**
 * Configure the following properties on the choice list component.
 * @publicDocs
 */
interface ChoiceListProps extends Required<Pick<ChoiceListProps$1, 'details' | 'disabled' | 'error' | 'label' | 'labelAccessibilityVisibility' | 'multiple' | 'name' | 'values'>> {
    /**
     * Whether the field is disabled, preventing any user interaction. When `true`, the `disabled` property on any child choices is ignored.
     *
     * @default false
     */
    disabled: Required<ChoiceListProps$1>['disabled'];
    /**
     * Whether multiple choices can be selected.
     *
     * @default false
     */
    multiple: Required<ChoiceListProps$1>['multiple'];
}

declare const tagName$Q = "s-choice-list";
interface ReactProps$Q extends Partial<ChoiceListProps>, Pick<ChoiceListProps$1, 'id' | 'children'> {
    /**
     * The choices a user can select from.
     *
     * Accepts choice components.
     */
    children?: ComponentChildren$1;
    /**
     * A callback fired when the user has finished changing the value.
     */
    onChange?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
    /**
     * A callback fired when the user makes any changes to the value.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
}

declare const internals$3: unique symbol;
declare class BaseClass$1 extends PolarisCustomElement {
    static formAssociated: boolean;
    constructor(renderImpl: RenderImpl);
    /** @private */
    [internals$3]: ElementInternals;
}
/**
 * Configure the following properties on the choice list component.
 * @publicDocs
 */
declare class ChoiceList extends BaseClass$1 implements ChoiceListProps {
    /**
     * Wraps change and input event listeners so they only fire when the event
     * was dispatched directly on this ChoiceList (event.eventPhase === Event.AT_TARGET).
     *
     * This prevents form events from elements inside secondary content (e.g.
     * TextField, native <input>) from being mistakenly treated as ChoiceList
     * value-change events, while still allowing those events to bubble normally
     * through the DOM (preserving React's event delegation).
     * @private
     */
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    /** @private */
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
    disabled: ChoiceListProps['disabled'];
    name: ChoiceListProps['name'];
    error: ChoiceListProps['error'];
    details: ChoiceListProps['details'];
    multiple: ChoiceListProps['multiple'];
    label: ChoiceListProps['label'];
    onchange: CallbackEventListener<typeof tagName$Q> | null;
    oninput: CallbackEventListener<typeof tagName$Q> | null;
    labelAccessibilityVisibility: ChoiceListProps['labelAccessibilityVisibility'];
    get values(): ChoiceListProps["values"];
    set values(values: ChoiceListProps['values']);
    /** @private */
    formResetCallback(): void;
    constructor();
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$Q]: ChoiceList;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$Q]: ReactProps$Q & PreactBaseElementPropsWithChildren<ChoiceList>;
        }
    }
}

type ClickableBaseProps = Required<Pick<ClickableProps$1, 'command' | 'commandFor' | 'interestFor' | 'disabled' | 'download' | 'href' | 'lang' | 'loading' | 'overflow' | 'target' | 'type'>>;
/**
 * Configure the following properties on the clickable component.
 * @publicDocs
 */
interface ClickableProps extends Required<BoxProps>, ClickableBaseProps {
    /**
     * Whether the component is in a loading state, which indicates to assistive technology that an action is in progress and prevents interaction.
     */
    loading: Required<ClickableProps$1>['loading'];
    /**
     * The language of the text content.
     *
     * Use this when the text is in a different language than the rest of the page, allowing assistive technologies
     * such as screen readers to invoke the correct pronunciation.
     *
     * The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
     *
     * @default ''
     */
    lang: Required<ClickableProps$1>['lang'];
    /**
     * Whether the component is disabled, preventing clicks and focus. When disabled, the `click` event won't fire and click events from child elements stop propagating immediately. Interactive child elements can still receive focus and be interacted with. This doesn't apply visual styling by default. You should apply disabled styling as needed.
     */
    disabled: Required<ClickableProps$1>['disabled'];
}

declare const tagName$P = "s-clickable";
interface ReactProps$P extends Partial<ClickableProps>, Pick<ClickableProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the clickable component, which makes any content interactive and clickable without the semantic meaning of a button or link.
     */
    children?: ComponentChildren$1;
    /**
     * A callback fired when the chip is clicked.
     */
    onClick?: ((event: CallbackEvent<typeof tagName$P>) => void) | null;
    /**
     * A callback fired when the chip receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$P>) => void) | null;
    /**
     * A callback fired when the chip loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$P>) => void) | null;
}

declare const Clickable_base: (abstract new (renderImpl: RenderImpl) => BoxElement & PreactOverlayControlProps) & Pick<typeof BoxElement, "prototype" | "observedAttributes">;
/**
 * Configure the following properties on the clickable component.
 * @publicDocs
 */
declare class Clickable extends Clickable_base implements ClickableProps {
    disabled: ClickableProps['disabled'];
    loading: ClickableProps['loading'];
    target: ClickableProps['target'];
    href: ClickableProps['href'];
    download: ClickableProps['download'];
    onclick: CallbackEventListener<typeof tagName$P> | null;
    onblur: CallbackEventListener<typeof tagName$P> | null;
    onfocus: CallbackEventListener<typeof tagName$P> | null;
    type: ClickableProps['type'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$P]: Clickable;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$P]: ReactProps$P & PreactBaseElementPropsWithChildren<Clickable>;
        }
    }
}

/**
 * Configure the following properties on the clickable chip component.
 * @publicDocs
 */
interface ClickableChipProps extends Required<Pick<ClickableChipProps$1, 'color' | 'accessibilityLabel' | 'removable' | 'hidden' | 'href' | 'disabled' | 'command' | 'commandFor' | 'interestFor'>> {
    /**
     * Whether the chip is hidden from view. When using controlled component pattern with `removable` chips, update this property when the `remove` event fires. For non-removable chips, manually toggle this property to show or hide the chip.
     *
     * @default false
     */
    hidden: Required<ClickableChipProps$1>['hidden'];
    /**
     * Whether the chip is disabled, preventing any user interaction.
     *
     * @default false
     */
    disabled: Required<ClickableChipProps$1>['disabled'];
    /**
     * The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation.
     */
    href: Required<ClickableChipProps$1>['href'];
    /**
     * Whether the chip displays a remove button for dismissal. When clicked, the `remove` callback fires.
     *
     * @default false
     */
    removable: Required<ClickableChipProps$1>['removable'];
}

declare const tagName$O = "s-clickable-chip";
interface ReactProps$O extends Partial<ClickableChipProps>, Pick<ClickableChipProps$1, 'id' | 'children'> {
    /**
     * The text label displayed within the chip, which represents an interactive filter, tag, or selectable item.
     */
    children?: ComponentChildren$1;
    /**
     * An optional icon to display at the start of the chip. Accepts only icon components.
     */
    graphic?: ComponentChildren$1;
    /**
     * A callback fired when the chip is clicked.
     */
    onClick?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
    /**
     * A callback fired when the user clicks the remove button on the chip.
     */
    onRemove?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
    /**
     * A callback fired when the chip is completely hidden, after any hide animations have completed.
     */
    onAfterHide?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
}

declare const ClickableChipBase_base: (abstract new (renderImpl: Omit<RenderImpl, "globalShadowCSS">) => PolarisCustomElement & PreactOverlayControlProps) & Pick<typeof PolarisCustomElement, "prototype" | "observedAttributes">;
declare abstract class ClickableChipBase<TTagName extends keyof HTMLElementTagNameMap> extends ClickableChipBase_base implements Pick<ClickableChipProps, 'accessibilityLabel' | 'removable' | 'hidden' | 'disabled' | 'href'> {
    accessibilityLabel: ClickableChipProps['accessibilityLabel'];
    removable: ClickableChipProps['removable'];
    hidden: ClickableChipProps['hidden'];
    disabled: ClickableChipProps['disabled'];
    href: ClickableChipProps['href'];
    abstract color: string;
    constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * Configure the following properties on the clickable chip component.
 * @publicDocs
 */
declare class ClickableChip extends ClickableChipBase<typeof tagName$O> implements ClickableChipProps {
    color: ClickableChipProps['color'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$O]: ClickableChip;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$O]: Omit<ReactProps$O, 'graphic'> & PreactBaseElementPropsWithChildren<ClickableChip>;
        }
    }
}

type PreactFieldProps<Autocomplete extends string = string> = PreactInputProps & Required<Pick<TextFieldProps$1, 'defaultValue' | 'details' | 'error' | 'label' | 'labelAccessibilityVisibility' | 'placeholder' | 'readOnly' | 'required'>> & {
    /**
     * A hint as to the intended content of the field.
     *
     * When set to `on` (the default), this property indicates that the field should support
     * autofill, but you do not have any more semantic information on the intended
     * contents.
     *
     * When set to `off`, you are indicating that this field contains sensitive
     * information, or contents that are never saved, like one-time codes.
     *
     * Alternatively, you can provide value which describes the
     * specific data you would like to be entered into this field during autofill.
     *
     * @see Learn more about the set of {@link https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens|autocomplete values} supported in browsers.
     *
     * @default 'tel' for PhoneField
     * @default 'email' for EmailField
     * @default 'url' for URLField
     * @default 'on' for everything else
     */
    autocomplete: Autocomplete;
};
declare class PreactFieldElement<Autocomplete extends string = string> extends PreactInputElement implements PreactFieldProps<Autocomplete> {
    autocomplete: PreactFieldProps<Autocomplete>['autocomplete'];
    defaultValue: PreactFieldProps['defaultValue'];
    details: PreactFieldProps['details'];
    error: PreactFieldProps['error'];
    label: PreactFieldProps['label'];
    labelAccessibilityVisibility: PreactFieldProps['labelAccessibilityVisibility'];
    placeholder: PreactFieldProps['placeholder'];
    readOnly: PreactFieldProps['readOnly'];
    required: PreactFieldProps['required'];
    /**
     * Global keyboard event handlers for things like key bindings typically
     * ignore keystrokes originating from within input elements. Unfortunately,
     * these never account for a Custom Element being the input element.
     *
     * To fix this, we spoof getAttribute & hasAttribute to make a PreactFieldElement
     * appear as a contentEditable "input" when it contains a focused input element.
     * @private technically not private, but we don't want to expose this as public API
     */
    getAttribute(qualifiedName: string): string | null;
    /**
     * @private technically not private, but we don't want to expose this as public API
     */
    hasAttribute(qualifiedName: string): boolean;
    /**
     * Checks if the shadow tree contains a focused input (input, textarea, select, <x contentEditable>).
     * Note: this does _not_ return true for focussed non-field form elements like buttons.
     * @private
     */
    get isContentEditable(): boolean;
    /** @private */
    formResetCallback(): void;
    /** @private */
    connectedCallback(): void;
    constructor(renderImpl: RenderImpl);
}

type ColorFieldProps = PreactFieldProps<Required<ColorFieldProps$1>['autocomplete']> & Required<Pick<ColorFieldProps$1, 'alpha' | 'value' | 'defaultValue'>>;

declare const tagName$N = "s-color-field";
interface ReactProps$N extends Partial<Omit<ColorFieldProps, 'accessory' | 'error' | 'details'>>, Pick<ColorFieldProps$1, 'id' | 'alpha' | 'value' | 'defaultValue'>, FieldReactProps<typeof tagName$N>, FieldSlotInternalReactProps {
    onInput?: (event: CallbackEvent<typeof tagName$N>) => void;
    onChange?: (event: CallbackEvent<typeof tagName$N>) => void;
}

declare abstract class ColorFieldBase extends PreactFieldElement<ColorFieldProps['autocomplete']> implements Pick<ColorFieldProps, 'alpha' | 'value'> {
    alpha: ColorFieldProps['alpha'];
    get value(): string;
    set value(value: string);
    /** @private */
    formResetCallback(): void;
    constructor(renderImpl: RenderImpl);
    /** @private */
    setInternalValue(value: string, normalize: boolean): void;
}

/**
 * Configure the following properties on the color field component.
 * @publicDocs
 */
declare class ColorField extends ColorFieldBase implements ColorFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$N]: ColorField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$N]: Omit<ReactProps$N, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<ColorField>;
        }
    }
}

/**
 * Configure the following properties on the color picker component.
 * @publicDocs
 */
interface ColorPickerProps extends Required<Pick<ColorPickerProps$1, 'id' | 'alpha' | 'value' | 'defaultValue' | 'name'>> {
    /**
     * The currently selected color value. Accepts multiple input formats:
     *
     * - Hex: `#RGB`, `#RRGGBB`, `#RRGGBBAA` (3, 6, or 8 digits)
     * - RGB/RGBA: `rgb(255, 0, 0)` or `rgb(255 0 0)` (comma or space-separated)
     * - HSL/HSLA: `hsl(0, 100%, 50%)` or `hsl(0 100% 50%)`
     *
     * Returns an empty string if the value is invalid. The `change` event always emits values in hex format.
     */
    value: Required<ColorPickerProps$1>['value'];
    /**
     * The initial color value when the field first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts interacting, their input replaces it. Changing this property after the field has loaded has no effect. To update the field value at any time, use `value` instead.
     */
    defaultValue: Required<ColorPickerProps$1>['defaultValue'];
    /**
     * Whether to enable alpha (transparency) channel selection in the color picker, allowing users to choose semi-transparent colors.
     *
     * @default false
     */
    alpha: Required<ColorPickerProps$1>['alpha'];
}

declare const tagName$M = "s-color-picker";
interface ReactProps$M extends Partial<ColorPickerProps>, Pick<ColorPickerProps$1, 'id' | 'alpha' | 'value' | 'defaultValue' | 'name'> {
    onInput?: (event: CallbackEvent<typeof tagName$M>) => void | null;
    onChange?: (event: CallbackEvent<typeof tagName$M>) => void | null;
}

declare const internals$2: unique symbol;
declare class BaseClass extends PolarisCustomElement {
    static formAssociated: boolean;
    constructor(renderImpl: RenderImpl);
    /** @private */
    [internals$2]: ElementInternals;
}
/**
 * Configure the following properties on the color picker component.
 * @publicDocs
 */
declare class ColorPicker extends BaseClass implements ColorPickerProps {
    alpha: boolean;
    onchange: CallbackEventListener<typeof tagName$M> | null;
    oninput: CallbackEventListener<typeof tagName$M> | null;
    name: string;
    defaultValue: string;
    get value(): string;
    set value(value: string);
    formResetCallback(): void;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$M]: ColorPicker;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$M]: ReactProps$M & PreactBaseElementProps<ColorPicker>;
        }
    }
}

/**
 * Configure the following properties on the date field component.
 * @publicDocs
 */
interface DateFieldProps extends PreactFieldProps<DateAutocompleteField>, Required<Pick<DateFieldProps$1, 'allow' | 'allowDays' | 'disallow' | 'disallowDays' | 'value' | 'defaultValue' | 'view' | 'defaultView'>> {
    /**
     * The currently selected date in `YYYY-MM-DD` format. An empty string means no date is selected.
     *
     * @default ""
     */
    value: Required<DateFieldProps$1>['value'];
    /**
     * The initial date value when the field first renders, in `YYYY-MM-DD` format. An empty string means no date is initially selected.
     *
     * @default ""
     */
    defaultValue: Required<DateFieldProps$1>['defaultValue'];
}

declare const tagName$L = "s-date-field";
interface ReactProps$L extends Partial<Omit<DateFieldProps, 'error' | 'details'>>, Pick<DateFieldProps$1, 'id'>, FieldSlotInternalReactProps {
    /**
     * A callback fired when the date field loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
    /**
     * A callback fired when the user has finished editing the date and the field value changes.
     */
    onChange?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
    /**
     * A callback fired when the date field receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
    /**
     * A callback fired when the user makes any changes to the date value.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
    /**
     * A callback fired when the field contains an invalid date.
     */
    onInvalid?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
    /**
     * A callback fired when the calendar view changes, such as when navigating between months.
     */
    onViewChange?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
}

declare abstract class DateFieldBase extends PreactFieldElement<DateFieldProps['autocomplete']> implements Pick<DateFieldProps, 'allow' | 'disallow' | 'allowDays' | 'disallowDays' | 'view' | 'defaultView'> {
    allow: DateFieldProps['allow'];
    disallow: DateFieldProps['disallow'];
    allowDays: DateFieldProps['allowDays'];
    disallowDays: DateFieldProps['disallowDays'];
    set view(view: string);
    get view(): string;
    defaultView: DateFieldProps['defaultView'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the date field component.
 * @publicDocs
 */
declare class DateField extends DateFieldBase implements DateFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$L]: DateField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$L]: Omit<ReactProps$L, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<DateField>;
        }
    }
}

/**
 * Configure the following properties on the date picker component.
 * @publicDocs
 */
interface DatePickerProps extends Required<Pick<DatePickerProps$1, 'defaultView' | 'view' | 'allow' | 'disallow' | 'allowDays' | 'disallowDays' | 'value' | 'defaultValue' | 'name'>> {
    /**
     * The type of date selection allowed.
     *
     * - `single`: Select a single date
     * - `range`: Select a date range
     *
     * @default "single"
     */
    type: Extract<DatePickerProps$1['type'], 'single' | 'range'>;
    /**
     * The currently selected date(s). An empty string means no date is selected.
     *
     * - Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
     * - Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`
     *
     * @default ""
     */
    value: Required<DatePickerProps$1>['value'];
    /**
     * The initially selected date(s) when the component first renders. An empty string means no date is initially selected.
     *
     * - Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
     * - Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`
     *
     * @default ""
     */
    defaultValue: Required<DatePickerProps$1>['defaultValue'];
    /**
     * Specifies which dates can be selected as a comma-separated list. An empty string (default) allows all dates.
     *
     * **Formats:**
     * - `YYYY-MM-DD`: Single date
     * - `YYYY-MM`: Whole month
     * - `YYYY`: Whole year
     * - `start--end`: Date range (inclusive, unbounded if start/end omitted)
     *
     * **Examples:**
     * - `2024-02--2025`: February 2024 through end of 2025
     * - `2024-05-09, 2024-05-11`: Only May 9th and 11th, 2024
     *
     * @default ""
     */
    allow: Required<DatePickerProps$1>['allow'];
    /**
     * Specifies which days of the week can be selected as a comma-separated list. Further restricts dates from `allow` and `disallow`. An empty string (default) has no effect.
     *
     * **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`
     *
     * **Example:** `saturday, sunday` (only weekends)
     *
     * @default ""
     */
    allowDays: Required<DatePickerProps$1>['allowDays'];
    /**
     * Specifies which dates can't be selected as a comma-separated list. These dates are excluded from those specified in `allow`. An empty string (default) has no effect.
     *
     * **Formats:**
     * - `YYYY-MM-DD`: Single date
     * - `YYYY-MM`: Whole month
     * - `YYYY`: Whole year
     * - `start--end`: Date range (inclusive, unbounded if start/end omitted)
     *
     * **Examples:**
     * - `--2024-02`: All dates before February 2024
     * - `2024-05-09, 2024-05-11`: May 9th and 11th, 2024
     *
     * @default ""
     */
    disallow: Required<DatePickerProps$1>['disallow'];
    /**
     * Specifies which days of the week can't be selected as a comma-separated list. Excludes days from `allowDays` and intersects with `allow` and `disallow`. An empty string (default) has no effect.
     *
     * **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`
     *
     * **Example:** `saturday, sunday` (no weekends)
     *
     * @default ""
     */
    disallowDays: Required<DatePickerProps$1>['disallowDays'];
    /**
     * The currently displayed month in `YYYY-MM` format. When changed, the `viewchange` callback is triggered. Defaults to `defaultView`.
     */
    view: Required<DatePickerProps$1>['view'];
    /**
     * The default month to display in `YYYY-MM` format. Used until the `view` callback is set by user interaction or programmatically. Defaults to the current month in the user's locale.
     */
    defaultView: Required<DatePickerProps$1>['defaultView'];
    /**
     * Controls how many months are displayed.
     *
     * - `'auto'`: Context-driven. Today this renders a single month, matching `'1'`.
     * - `'1'`: Renders one month at a time.
     * - `'2'`: Renders two consecutive months side-by-side.
     *
     * @default 'auto'
     */
    visibleMonths: 'auto' | '1' | '2';
}

declare const tagName$K = "s-date-picker";
interface ReactProps$K extends Partial<DatePickerProps>, Pick<DatePickerProps$1, 'id'> {
    /**
     * A callback fired when the calendar view changes, such as when navigating between months.
     */
    onViewChange?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
    /**
     * A callback fired when the date picker receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
    /**
     * A callback fired when the date picker loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
    /**
     * A callback fired when the user makes any changes to the selected date.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
    /**
     * A callback fired when the user has finished selecting a date and the value changes.
     */
    onChange?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
}

declare const internals$1: unique symbol;
declare const dirtyStateSymbol: unique symbol;
declare abstract class DatePickerBase<TagName extends 's-date-picker' | 's-internal-date-picker'> extends PolarisCustomElement implements DatePickerProps {
    static formAssociated: boolean;
    constructor(renderImpl: RenderImpl);
    /** @private */
    [internals$1]: ElementInternals;
    defaultView: string;
    set view(view: string);
    get view(): string;
    allow: DatePickerProps['allow'];
    disallow: DatePickerProps['disallow'];
    allowDays: DatePickerProps['allowDays'];
    disallowDays: DatePickerProps['disallowDays'];
    type: DatePickerProps['type'];
    defaultValue: DatePickerProps['defaultValue'];
    name: DatePickerProps['name'];
    visibleMonths: DatePickerProps['visibleMonths'];
    set value(value: string);
    get value(): string;
    /** @private */
    [dirtyStateSymbol]: boolean;
    /** @private */
    formResetCallback(): void;
}

/**
 * Configure the following properties on the date picker component.
 * @publicDocs
 */
declare class DatePicker extends DatePickerBase<typeof tagName$K> implements DatePickerProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$K]: DatePicker;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$K]: ReactProps$K & PreactBaseElementProps<DatePicker>;
        }
    }
}

/**
 * Configure the following properties on the divider component.
 * @publicDocs
 */
interface DividerProps extends Pick<DividerProps$1, 'direction' | 'color'> {
    /**
     * The orientation of the divider line, using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
     *
     * - `inline`: Horizontal divider for separating vertically stacked content
     * - `block`: Vertical divider for separating horizontally arranged content
     *
     * @default 'inline'
     */
    direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
    /**
     * The visual prominence of the divider line.
     *
     * - `base`: Standard divider for most separations (default)
     * - `strong`: More prominent divider for major section breaks
     *
     * @default 'base'
     */
    color: Extract<DividerProps$1['color'], 'base' | 'strong'>;
}

declare const tagName$J = "s-divider";
interface ReactProps$J extends Partial<DividerProps>, Pick<DividerProps$1, 'id'> {
}

/**
 * Configure the following properties on the divider component.
 * @publicDocs
 */
declare class Divider extends PolarisCustomElement implements DividerProps {
    direction: DividerProps['direction'];
    color: DividerProps['color'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$J]: Divider;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$J]: ReactProps$J & PreactBaseElementProps<Divider>;
        }
    }
}

/**
 * Configure the following properties on the drop zone component.
 * @publicDocs
 */
interface DropZoneProps extends Required<Pick<DropZoneProps$1, 'accept' | 'accessibilityLabel' | 'disabled' | 'files' | 'name' | 'error' | 'label' | 'labelAccessibilityVisibility' | 'multiple' | 'required' | 'value'>> {
    /**
     * A label that describes the purpose or contents of the item. When set,
     * it will be announced to buyers using assistive technologies and will
     * provide them with more context.
     */
    accessibilityLabel: Required<DropZoneProps$1>['accessibilityLabel'];
    /**
     * Whether multiple files can be selected or dropped at once.
     *
     * @default false
     */
    multiple: Required<DropZoneProps$1>['multiple'];
    /**
     * A string representing the types of files that are accepted by the drop zone.
     * This string is a comma-separated list of unique file type specifiers which can be one of the following:
     * - A file extension starting with a period (".") character (e.g. .jpg, .pdf, .doc)
     * - A valid MIME type string with no extensions
     *
     * If omitted, all file types are accepted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
     * @default ''
     */
    accept: Required<DropZoneProps$1>['accept'];
}

declare const tagName$I = "s-drop-zone";
interface ReactProps$I extends Partial<DropZoneProps>, Pick<DropZoneProps$1, 'id'> {
    /**
     * The content to include inside the drop zone container
     */
    children?: ComponentChildren$1;
    /**
     * A callback fired when the user has finished selecting files and the value changes.
     */
    onChange?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
    /**
     * A callback fired when files are selected or dropped.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
    /**
     * A callback fired when a dropped file is rejected due to file type or size restrictions.
     */
    onDropRejected?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
}
declare const reactWrapperConfig: {
    readonly readOnlyProps: readonly ["files", "value"];
};

type ReplaceType<TType, TFrom, TTo> = Exclude<TType, TFrom> | TTo;

declare const setFiles: unique symbol;

declare const internals: unique symbol;
declare const getFileInput: unique symbol;
declare abstract class DropZoneBase extends PolarisCustomElement {
    static formAssociated: boolean;
    accept: DropZoneProps['accept'];
    accessibilityLabel: DropZoneProps['accessibilityLabel'];
    disabled: DropZoneProps['disabled'];
    error: DropZoneProps['error'];
    label: DropZoneProps['label'];
    labelAccessibilityVisibility: DropZoneProps['labelAccessibilityVisibility'];
    multiple: DropZoneProps['multiple'];
    name: DropZoneProps['name'];
    required: DropZoneProps['required'];
    get value(): string;
    /** This sets the input value for a file type, which cannot be set programatically, so it can only be reset. */
    set value(value: '' | null);
    get files(): File[];
    set files(files: File[]);
    /** @private */
    [setFiles](files: File[]): void;
    /** @private */
    [getFileInput](): ReplaceType<Element | null | undefined, Element, HTMLInputElement>;
    /** @private */
    formResetCallback(): void;
    /** @private */
    [internals]: ElementInternals;
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the drop zone component.
 * @publicDocs
 */
declare class DropZone extends DropZoneBase implements DropZoneProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$I]: DropZone;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$I]: Omit<ReactProps$I, ReadOnlyPropKeys<typeof reactWrapperConfig>> & {
                value?: '' | null;
            } & PreactBaseElementPropsWithChildren<DropZone>;
        }
    }
}

type EmailFieldProps = PreactFieldProps<Required<EmailFieldProps$1>['autocomplete']> & Required<Pick<EmailFieldProps$1, 'maxLength' | 'minLength'>>;

declare const tagName$H = "s-email-field";
interface ReactProps$H extends Partial<Omit<EmailFieldProps, 'accessory' | 'error' | 'details'>>, Pick<EmailFieldProps$1, 'id'>, FieldReactProps<typeof tagName$H>, FieldSlotInternalReactProps {
}

declare abstract class EmailFieldBase extends PreactFieldElement<EmailFieldProps['autocomplete']> implements Pick<EmailFieldProps, 'autocomplete' | 'maxLength' | 'minLength'> {
    autocomplete: EmailFieldProps['autocomplete'];
    maxLength: EmailFieldProps['maxLength'];
    minLength: EmailFieldProps['minLength'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the email field component.
 * @publicDocs
 */
declare class EmailField extends EmailFieldBase implements EmailFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$H]: EmailField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$H]: Omit<ReactProps$H, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<EmailField>;
        }
    }
}

interface EmptyStateProps extends Required<Pick<EmptyStateProps$1, 'heading'>> {
}

declare const tagName$G = "s-empty-state";
interface ReactProps$G extends Partial<EmptyStateProps>, Pick<EmptyStateProps$1, 'id'> {
    /**
     * The main call to action, rendered below the text content. Accepts a single `Button` with a `variant` of `primary`; anything else is ignored with a development warning.
     */
    primaryAction?: ComponentChildren$1;
    /**
     * An alternative action, rendered beside the primary one. Accepts a single `Button` with a `variant` of `secondary` or `auto` — despite the plural name, only one is rendered.
     */
    secondaryActions?: ComponentChildren$1;
    /**
     * An illustration or symbol shown above the heading. Accepts a single `Image` or `Icon`, either directly or as the only child of a wrapping element.
     */
    graphic?: ComponentChildren$1;
    /**
     * Supporting text below the heading, explaining what's missing or what to do next. Accepts `Text` and `Link` components.
     */
    subheading?: ComponentChildren$1;
}

/**
 * Configure the following properties on the empty state component.
 * @publicDocs
 */
declare class EmptyState extends PolarisCustomElement implements EmptyStateProps {
    constructor();
    heading: EmptyStateProps['heading'];
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$G]: EmptyState;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$G]: Omit<ReactProps$G, 'primaryAction' | 'secondaryActions' | 'graphic' | 'subheading'> & PreactBaseElementPropsWithChildren<EmptyState>;
        }
    }
}

type RequiredAlignedProps = Required<GridProps$1>;
type ResponsiveGridProps = MakeResponsivePick<RequiredAlignedProps, 'rowGap' | 'columnGap' | 'gap' | 'gridTemplateColumns' | 'gridTemplateRows'>;
/**
 * Configure the following properties on the grid component.
 * @publicDocs
 */
interface GridProps extends BoxProps, Required<Pick<GridProps$1, 'alignItems' | 'justifyItems' | 'placeItems' | 'alignContent' | 'justifyContent' | 'placeContent'>> {
    /**
     * Aligns the grid items along the block axis.
     *
     * @default '' - meaning no override
     */
    alignItems: AlignItemsKeyword | '';
    /**
     * Aligns the grid items along the inline axis.
     *
     * @default '' - meaning no override
     */
    justifyItems: JustifyItemsKeyword | '';
    /**
     * A shorthand property for `justify-items` and `align-items`.
     *
     * @default 'normal normal'
     */
    placeItems: `${AlignItemsKeyword} ${JustifyItemsKeyword}` | AlignItemsKeyword;
    /**
     * Aligns the grid along the block axis. This overrides the block value of `placeContent`.
     *
     * @default '' - meaning no override
     */
    alignContent: AlignContentKeyword | '';
    /**
     * Aligns the grid along the inline axis. This overrides the inline value of `placeContent`.
     *
     * @default '' - meaning no override
     */
    justifyContent: JustifyContentKeyword | '';
    /**
     * A shorthand property for `justify-content` and `align-content`.
     *
     * @default 'normal normal'
     */
    placeContent: `${AlignContentKeyword} ${JustifyContentKeyword}` | AlignContentKeyword;
    /**
     * Adjusts spacing between elements.
     *
     * Accepts:
     * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value applied to both axes, such as `large-100`
     * - A pair of values, such as `large-100 large-500`, to set the inline and block axes respectively
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
     *
     * @default 'none'
     */
    gap: ResponsiveGridProps['gap'];
    /**
     * Adjusts spacing between elements in the block axis. This overrides the row value of `gap`.
     *
     * Accepts:
     * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value, such as `large-100`
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
     *
     * @default '' - meaning no override
     */
    rowGap: ResponsiveGridProps['rowGap'];
    /**
     * Adjusts spacing between elements in the inline axis. This overrides the column value of `gap`.
     *
     * Accepts:
     * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value, such as `large-100`
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
     *
     * @default '' - meaning no override
     */
    columnGap: ResponsiveGridProps['columnGap'];
    /**
     * The columns in the grid and their sizes.
     *
     * Accepts:
     * - [Track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes), such as `1fr auto`
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported track sizing values as a query value
     *
     * @default 'none'
     */
    gridTemplateColumns: ResponsiveGridProps['gridTemplateColumns'];
    /**
     * The rows in the grid and their sizes.
     *
     * Accepts:
     * - [Track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes), such as `1fr auto`
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported track sizing values as a query value
     *
     * @default 'none'
     */
    gridTemplateRows: ResponsiveGridProps['gridTemplateRows'];
}

declare const tagName$F = "s-grid";
interface ReactProps$F extends Partial<GridProps>, Pick<GridProps$1, 'id' | 'children'> {
    /**
     * The child elements displayed within the grid component, which are arranged in a flexible grid layout with configurable columns, rows, and spacing.
     */
    children?: ComponentChildren$1;
}

/**
 * Configure the following properties on the grid component.
 * @publicDocs
 */
declare class Grid extends BoxElement implements GridProps {
    constructor();
    gridTemplateColumns: GridProps['gridTemplateColumns'];
    gridTemplateRows: GridProps['gridTemplateRows'];
    justifyItems: GridProps['justifyItems'];
    alignItems: GridProps['alignItems'];
    placeItems: GridProps['placeItems'];
    justifyContent: GridProps['justifyContent'];
    alignContent: GridProps['alignContent'];
    placeContent: GridProps['placeContent'];
    gap: GridProps['gap'];
    rowGap: GridProps['rowGap'];
    columnGap: GridProps['columnGap'];
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$F]: Grid;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$F]: ReactProps$F & PreactBaseElementPropsWithChildren<Grid>;
        }
    }
}

type RequiredGridItemProps = Required<GridItemProps$1>;
/**
 * The grid item component represents a single cell within a grid layout, allowing you to control how content is positioned and sized within the grid. Use grid item as a child of grid to specify column span, row span, and positioning for individual content areas.
 *
 * Grid item supports precise placement control through column and row properties, enabling you to create complex layouts where different items occupy varying amounts of space or appear in specific grid positions.
 * @publicDocs
 */
interface GridItemProps extends BoxProps, Required<Pick<GridItemProps$1, 'gridColumn' | 'gridRow'>> {
    /**
     * The number of columns the item will span across.
     *
     * Learn more about the [grid-column property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).
     *
     * @default 'auto'
     */
    gridColumn: RequiredGridItemProps['gridColumn'];
    /**
     * The number of rows the item will span across.
     *
     * Learn more about the [grid-row property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row).
     *
     * @default 'auto'
     */
    gridRow: RequiredGridItemProps['gridRow'];
}

declare const tagName$E = "s-grid-item";
interface ReactProps$E extends Partial<GridItemProps>, Pick<GridItemProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the grid item component, which represents a single cell in the grid layout and can span multiple columns or rows.
     */
    children?: ComponentChildren$1;
}

/**
 * The grid item component represents a single cell within a grid layout, allowing you to control how content is positioned and sized within the grid. Use grid item as a child of grid to specify column span, row span, and positioning for individual content areas.
 *
 * Grid item supports precise placement control through column and row properties, enabling you to create complex layouts where different items occupy varying amounts of space or appear in specific grid positions.
 * @publicDocs
 */
declare class GridItem extends BoxElement implements GridItemProps {
    gridColumn: GridItemProps['gridColumn'];
    gridRow: GridItemProps['gridRow'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$E]: GridItem;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$E]: ReactProps$E & PreactBaseElementPropsWithChildren<GridItem>;
        }
    }
}

declare const typographyFontWeights: readonly ["auto", "base", "medium", "semibold", "bold"];
type TypographyFontWeight = (typeof typographyFontWeights)[number];
declare const bodyFontSizes: readonly ["auto", "small-200", "small-100", "small", "base", "large", "large-100"];
type BodyFontSize = (typeof bodyFontSizes)[number];
declare const headingFontSizes: readonly ["auto", "small", "base", "large", "large-100", "large-200", "large-300", "large-400"];
type HeadingFontSize = (typeof headingFontSizes)[number];

/**
 * Configure the following properties on the heading component.
 * @publicDocs
 */
interface HeadingProps extends Required<Pick<HeadingProps$1, 'accessibilityRole' | 'accessibilityVisibility' | 'lineClamp'>> {
    /**
     * The font size of the heading. The named values also apply their matching
     * line-height and letter-spacing:
     *
     * - 'small' maps to headingXs
     * - 'base' maps to headingSm
     * - 'large' / 'large-100' maps to headingMd
     * - 'large-200' maps to headingLg
     * - 'large-300' maps to headingXl
     * - 'large-400' maps to heading2xl
     *
     * @default 'auto'
     */
    fontSize: HeadingFontSize;
    /**
     * The semantic meaning of the component’s content. When set,
     * the role will be used by assistive technologies to help users
     * navigate the page.
     *
     * - `heading`: Identifies the element as a heading for assistive technologies.
     * - `none`: Removes semantic meaning from the heading element.
     * - `presentation`: Removes semantic meaning from the heading element.
     *
     * @default 'heading'
     *
     * @implementation The `heading` role doesn't need to be applied if
     * the host applies it for you; for example, an HTML host rendering
     * an `<h2>` element should not apply the `heading` role.
     */
    accessibilityRole: Required<HeadingProps$1>['accessibilityRole'];
}

declare const tagName$D = "s-heading";
interface ReactProps$D extends Partial<HeadingProps>, Pick<HeadingProps$1, 'id' | 'children'> {
    /**
     * The heading text displayed within the heading component, which provides a title or section header for content.
     */
    children?: ComponentChildren$1;
}

declare abstract class HeadingBase extends PolarisCustomElement implements Pick<HeadingProps, 'accessibilityRole' | 'accessibilityVisibility' | 'fontSize' | 'lineClamp'> {
    fontSize: HeadingProps['fontSize'];
    accessibilityRole: HeadingProps['accessibilityRole'];
    lineClamp: HeadingProps['lineClamp'];
    accessibilityVisibility: HeadingProps['accessibilityVisibility'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the heading component.
 * @publicDocs
 */
declare class Heading extends HeadingBase implements HeadingProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$D]: Heading;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$D]: ReactProps$D & PreactBaseElementPropsWithChildren<Heading>;
        }
    }
}

declare const tagName$C = "s-icon";
interface ReactProps$C extends Partial<IconProps>, Pick<IconProps$1, 'id'> {
}

declare abstract class IconBase extends PolarisCustomElement implements Pick<IconProps, 'color' | 'size' | 'interestFor'> {
    color: IconProps['color'];
    size: IconProps['size'];
    interestFor: IconProps['interestFor'];
    abstract tone: string;
    abstract type: string;
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the icon component.
 * @publicDocs
 */
declare class Icon extends IconBase implements IconProps {
    tone: IconProps['tone'];
    type: IconProps['type'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$C]: Icon;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$C]: ReactProps$C & PreactBaseElementProps<Icon>;
        }
    }
}

/**
 * Configure the following properties on the image component.
 * @publicDocs
 */
interface ImageProps extends Required<Pick<ImageProps$1, 'alt' | 'loading' | 'src' | 'accessibilityRole' | 'inlineSize' | 'srcSet' | 'sizes' | 'aspectRatio' | 'objectFit'>>, Required<Pick<BoxProps, 'border' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth'>> {
    /**
     * The loading strategy for the image.
     *
     * - `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
     * - `lazy`: Delays loading the image until it approaches a specified distance from the viewport.
     *
     * Learn more about the [loading attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading).
     *
     * @default 'eager'
     */
    loading: Required<ImageProps$1>['loading'];
    /**
     * The semantic meaning of the component’s content. When set,
     * the role will be used by assistive technologies to help users
     * navigate the page.
     *
     * - `none`: Completely hides the element and its content from assistive technologies
     * - `presentation`: Removes semantic meaning, making the image purely decorative and ignored by screen readers.
     * - `img`: Identifies the element as an image that conveys meaningful information to users.
     *
     * @default 'img'
     *
     * @implementation The `img` role doesn't need to be applied if
     * the host applies it for you; for example, an HTML host rendering
     * an `<img>` element should not apply the `img` role.
     */
    accessibilityRole: Required<ImageProps$1>['accessibilityRole'];
    /**
     * The displayed inline width of the image.
     *
     * - `fill`: the image will take up 100% of the available inline size.
     * - `auto`: the image will be displayed at its natural size.
     *
     * Learn more about the [width attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width).
     *
     * @default 'fill'
     */
    inlineSize: Required<ImageProps$1>['inlineSize'];
    /**
     * The aspect ratio of the image.
     *
     * The rendering of the image will depend on the `inlineSize` value:
     *
     * - `inlineSize="fill"`: the aspect ratio will be respected and the image will take the necessary space.
     * - `inlineSize="auto"`: the image will not render until it has loaded and the aspect ratio will be ignored.
     *
     * For example, if the value is set as `50 / 100`, the getter returns `50 / 100`.
     * If the value is set as `0.5`, the getter returns `0.5 / 1`.
     *
     * Learn more about the [aspect-ratio property](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio).
     *
     * @default '1/1'
     */
    aspectRatio: Required<ImageProps$1>['aspectRatio'];
    /**
     * The image resizing behavior to fit within its container.
     *
     * - `contain`: Scales the image to fit within the container while maintaining its aspect ratio. The entire image is visible, but might leave empty space.
     * - `cover`: Scales the image to fill the entire container while maintaining its aspect ratio. The image might be cropped to fit.
     *
     * The image is always positioned in the center of the container.
     *
     * Learn more about the [object-fit property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
     *
     * @default 'contain'
     */
    objectFit: Required<ImageProps$1>['objectFit'];
}

declare const tagName$B = "s-image";
interface ReactProps$B extends Partial<ImageProps>, Pick<ImageProps$1, 'id'> {
    /**
     * A callback fired when the image fails to load.
     */
    onError?: ((event: CallbackEvent<typeof tagName$B>) => void) | null;
    /**
     * A callback fired when the image loads successfully.
     */
    onLoad?: ((event: CallbackEvent<typeof tagName$B>) => void) | null;
}

/**
 * Configure the following properties on the image component.
 * @publicDocs
 */
declare class Image extends PolarisCustomElement implements ImageProps {
    src: ImageProps['src'];
    srcSet: ImageProps['srcSet'];
    sizes: ImageProps['sizes'];
    alt: ImageProps['alt'];
    aspectRatio: ImageProps['aspectRatio'];
    objectFit: ImageProps['objectFit'];
    loading: ImageProps['loading'];
    accessibilityRole: ImageProps['accessibilityRole'];
    inlineSize: ImageProps['inlineSize'];
    border: ImageProps['border'];
    borderWidth: ImageProps['borderWidth'];
    borderStyle: ImageProps['borderStyle'];
    borderColor: ImageProps['borderColor'];
    borderRadius: ImageProps['borderRadius'];
    onload: CallbackEventListener<typeof tagName$B> | null;
    onerror: OnErrorEventHandler;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$B]: Image;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$B]: ReactProps$B & PreactBaseElementProps<Image>;
        }
    }
}

type RequiredLinkProps = Required<LinkProps$1>;
type LinkBaseProps = Required<Pick<LinkProps$1, 'accessibilityLabel' | 'command' | 'commandFor' | 'interestFor' | 'download' | 'href' | 'lang' | 'target' | 'tone'>>;
/**
 * Configure the following properties on the link component.
 * @publicDocs
 */
interface LinkProps extends LinkBaseProps {
    /**
     * The semantic meaning and color treatment of the component.
     *
     * - `critical`: Urgent problems or destructive actions.
     * - `auto`: Automatically determined based on context.
     * - `neutral`: General information without specific intent.
     *
     * @default 'auto'
     */
    tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
    /**
     * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
     */
    accessibilityLabel: Required<LinkProps$1>['accessibilityLabel'];
    /**
     * The language of the text content. Use this when the text is in a different language than the rest of the page, allowing assistive technologies such as screen readers to invoke the correct pronunciation. The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
     */
    lang: Required<LinkProps$1>['lang'];
}

declare const tagName$A = "s-link";
interface ReactProps$A extends Partial<LinkProps>, Pick<LinkProps$1, 'id' | 'lang' | 'children'> {
    /**
     * The text or elements displayed within the link component, which navigates users to a different location when activated.
     */
    children?: ComponentChildren$1;
    /**
     * A callback fired when the link is clicked.
     */
    onClick?: ((event: CallbackEvent<typeof tagName$A>) => void) | null;
}

declare const LinkBase_base: (abstract new (renderImpl: Omit<RenderImpl, "globalShadowCSS">) => PolarisCustomElement & PreactOverlayControlProps) & Pick<typeof PolarisCustomElement, "prototype" | "observedAttributes">;
declare abstract class LinkBase<TTagName extends keyof HTMLElementTagNameMap> extends LinkBase_base implements Pick<LinkProps, 'accessibilityLabel' | 'interestFor' | 'href' | 'target' | 'download' | 'lang'> {
    accessibilityLabel: LinkProps['accessibilityLabel'];
    href: LinkProps['href'];
    target: LinkProps['target'];
    download: LinkProps['download'];
    lang: LinkProps['lang'];
    abstract tone: string;
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the link component.
 * @publicDocs
 */
declare class Link extends LinkBase<typeof tagName$A> implements LinkProps {
    tone: LinkProps['tone'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$A]: Link;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$A]: ReactProps$A & PreactBaseElementPropsWithChildren<Link>;
        }
    }
}

/**
 * The list item component represents a single entry within an ordered list or unordered list. Use list item to structure individual points, steps, or items within a list, with each item automatically receiving appropriate list markers (bullets or numbers) from its parent list.
 *
 * List item must be used as a direct child of ordered list or unordered list components. Each list item can contain text, inline formatting, or other components to create rich list content.
 * @publicDocs
 */
interface ListItemProps extends ListItemProps$1 {
    /**
     * The content displayed within the list item, which represents a single entry in an ordered or unordered list.
     */
    children?: ListItemProps$1['children'];
}

declare const tagName$z = "s-list-item";
interface ReactProps$z extends Partial<ListItemProps>, Pick<ListItemProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the list item, which represents a single entry in an ordered or unordered list.
     */
    children?: ComponentChildren$1;
}

/**
 * The list item component represents a single entry within an ordered list or unordered list. Use list item to structure individual points, steps, or items within a list, with each item automatically receiving appropriate list markers (bullets or numbers) from its parent list.
 *
 * List item must be used as a direct child of ordered list or unordered list components. Each list item can contain text, inline formatting, or other components to create rich list content.
 * @publicDocs
 */
declare class ListItem extends PolarisCustomElement implements ListItemProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$z]: ListItem;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$z]: ReactProps$z & PreactBaseElementPropsWithChildren<ListItem>;
        }
    }
}

/**
 * Configure the following properties on the menu component.
 * @publicDocs
 */
interface MenuProps extends Required<Pick<MenuProps$1, 'id' | 'accessibilityLabel'>> {
    /**
     * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
     */
    accessibilityLabel: Required<MenuProps$1>['accessibilityLabel'];
}

declare const tagName$y = "s-menu";
interface ReactProps$y extends Partial<MenuProps>, Pick<MenuProps$1, 'id' | 'children'> {
    /**
     * The items displayed within the menu. Only accepts button and section components. Use button for individual menu actions and section to group related items.
     */
    children?: ComponentChildren$1;
}

/**
 * Shared symbols for overlay control functionality.
 * These symbols are used by components that implement overlay behavior
 * (like Popover, Tooltip, Modal, etc.) to communicate with the overlay control system.
 */
/**
 * Symbol used to track the open or closed state of the overlay.
 */
declare const overlayHidden: unique symbol;
/**
 * Symbol used to track the element that opened the overlay. In some cases, like tooltips and popovers, the overlay is positioned against this element. In all cases, focus should be restored to this element when the overlay is closed.
 */
declare const overlayActivator: unique symbol;
declare const overlayHideFrameId: unique symbol;
type PolyfillCommandEventInit = EventInit & {
    source: HTMLElement | null | undefined;
    command: PreactOverlayControlProps['command'];
    rootActivator?: HTMLElement | null;
};
type PolyfillCommandEvent = Event & {
    source: PolyfillCommandEventInit['source'];
    command: PolyfillCommandEventInit['command'];
    /** Have to use `_s_shadowSource` because `source` is retargeted to the shadow host by browsers */
    _s_shadowSource: PolyfillCommandEventInit['source'];
    /** Root activator for nested overlays (e.g., menu button when modal opened from menu item) */
    _s_rootActivator?: HTMLElement | null;
};
declare global {
    interface GlobalEventHandlersEventMap {
        command: PolyfillCommandEvent;
    }
}

declare class PreactOverlayElement extends PolarisCustomElement {
    constructor(renderImpl: RenderImpl);
    /** @private */
    disconnectedCallback(): void;
    /** @private */
    [overlayHidden]: boolean;
    /** @private */
    [overlayActivator]: HTMLElement | null | undefined;
    /** @private */
    [overlayHideFrameId]?: number;
}

/**
 * Configure the following properties on the menu component.
 * @publicDocs
 */
declare class Menu extends PreactOverlayElement implements MenuProps {
    accessibilityLabel: string;
    constructor();
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$y]: Menu;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$y]: ReactProps$y & PreactBaseElementPropsWithChildren<Menu>;
        }
    }
}

type RequiredAlignedModalProps = Required<ModalProps$1>;
/**
 * Configure the following properties on the modal component.
 * @publicDocs
 */
interface ModalProps extends Pick<RequiredAlignedModalProps, 'accessibilityLabel' | 'heading' | 'padding' | 'size' | 'hideOverlay' | 'showOverlay' | 'toggleOverlay'> {
    /**
     * The size of the modal component, controlling its width and height. Larger sizes provide more space for content while smaller sizes are more compact.
     */
    size: Extract<ModalProps$1['size'], 'small-100' | 'small' | 'base' | 'large' | 'large-100'>;
    /**
     * A title that describes the content of the modal.
     *
     */
    heading: RequiredAlignedModalProps['heading'];
    /**
     * A label that describes the purpose of the modal. When set,
     * it will be announced to users using assistive technologies and will
     * provide them with more context.
     *
     * This overrides the `heading` prop for screen readers.
     */
    accessibilityLabel: RequiredAlignedModalProps['accessibilityLabel'];
    /**
     * Adjust the padding around the modal content.
     *
     * `base`: applies padding that is appropriate for the element.
     *
     * `none`: removes all padding from the element. This can be useful when elements inside the modal need to span
     * to the edge of the modal. For example, a full-width image. In this case, rely on box with a padding of 'base'
     * to bring back the desired padding for the rest of the content.
     *
     * @default 'base'
     */
    padding: RequiredAlignedModalProps['padding'];
}

declare const tagName$x = "s-modal";
interface ReactProps$x extends Partial<ModalProps>, Pick<ModalProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the modal component, typically including form fields, information, or interactive elements.
     */
    children?: ComponentChildren$1;
    /**
     * The main action button displayed in the modal footer, representing the primary action users should take.
     *
     * Only accepts a single button component with a `variant` of `primary`. This action should align with the modal's main purpose.
     */
    primaryAction?: ComponentChildren$1;
    /**
     * Additional action buttons displayed in the modal footer, providing alternative or supporting actions.
     *
     * Only accepts button components with a `variant` of `secondary` or `auto`. These are visually de-emphasized to establish clear hierarchy.
     */
    secondaryActions?: ComponentChildren$1;
    /**
     * A callback fired immediately when the modal starts to hide.
     */
    onHide?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
    /**
     * A callback fired immediately when the modal starts to show.
     */
    onShow?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
    /**
     * A callback fired when the modal is completely hidden, after any hide animations have completed.
     */
    onAfterHide?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
    /**
     * A callback fired when the modal is completely shown, after any show animations have completed.
     */
    onAfterShow?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
}

declare const hasOpenChildModal: unique symbol;

declare const show: unique symbol;
declare const hide: unique symbol;
declare const isOpen: unique symbol;
declare const dialog: unique symbol;
declare const dismiss: unique symbol;
declare const focusedElement: unique symbol;
declare const rootActivator: unique symbol;
declare const onEscape: unique symbol;
declare const nestedModals: unique symbol;
declare const onKeyUp: unique symbol;
declare const onBackdropMouseDown: unique symbol;
declare const onBackdropMouseUp: unique symbol;
declare const onBackdropClick: unique symbol;
declare const backdropMouseDownOnDialog: unique symbol;
declare const backdropMouseUpOnDialog: unique symbol;
declare const abortController: unique symbol;
declare const onChildModalChange: unique symbol;
declare const childrenRerenderObserver: unique symbol;
declare const shadowDomRerenderObserver: unique symbol;
declare const focusTrapController: unique symbol;
declare const escapeKeyUpController: unique symbol;
declare const ensureDialogRef: unique symbol;
declare abstract class ModalBase<TTagName extends keyof HTMLElementTagNameMap> extends PreactOverlayElement implements Pick<ModalProps, 'accessibilityLabel' | 'heading' | 'padding' | 'size'> {
    accessibilityLabel: ModalProps['accessibilityLabel'];
    heading: ModalProps['heading'];
    padding: ModalProps['padding'];
    size: ModalProps['size'];
    /** @private */
    [abortController]: AbortController;
    /** @private */
    [dialog]: HTMLDialogElement | null;
    /** @private */
    [focusedElement]: HTMLElement | null;
    /** @private */
    [rootActivator]: HTMLElement | null;
    /** @private */
    [nestedModals]: Map<ModalBase<TTagName>, boolean>;
    /** @private */
    [childrenRerenderObserver]: MutationObserver;
    /** @private */
    [shadowDomRerenderObserver]: MutationObserver;
    /**
     * Focus trap keydown handler reference, stored for cleanup.
     *
     * The focus trap is managed imperatively here in ModalBase rather than
     * via a Preact useEffect in foundation.tsx. This is because aftershow
     * (fired after CSS animations complete) and useEffect (fired after
     * Preact's async effect scheduling) are independent async chains with
     * no synchronization — the useEffect could run before or after
     * aftershow, making tests non-deterministic.
     *
     * By attaching the focus trap in the same .then() chain as aftershow,
     * we guarantee it is active before aftershow dispatches.
     *
     * Lifecycle (mirrors the old useEffect's isActiveModal dependency):
     * - Attached: in aftershow chain, right before aftershow dispatches
     * - Detached: on dismiss(), disconnectedCallback(), or child modal open
     * - Re-attached: when all child modals close
     * @private
     */
    [focusTrapController]: AbortController | null;
    /**
     * Holds the in-flight document keyup suppressor below so a second Escape
     * close replaces it instead of stacking another one.
     * @private
     */
    [escapeKeyUpController]: AbortController | null;
    /** @private */
    [onEscape]: (event: KeyboardEvent) => void;
    /** @private */
    [onKeyUp]: (event: KeyboardEvent) => void;
    /**
     * Whether the most recent mousedown / mouseup on the dialog landed on the
     * backdrop area (the `<dialog>` element itself, outside its content box)
     * rather than inside the modal content.
     *
     * Used by [onBackdropClick] to distinguish a true backdrop click from a
     * `click` event whose target is the dialog only because the user dragged
     * across the content/backdrop boundary. Reset on every backdrop
     * interaction (or when no click follows).
     * @private
     */
    [backdropMouseDownOnDialog]: boolean;
    /** @private */
    [backdropMouseUpOnDialog]: boolean;
    /** @private */
    [onBackdropMouseDown]: (event: MouseEvent) => void;
    /** @private */
    [onBackdropMouseUp]: (event: MouseEvent) => void;
    /** @private */
    [onBackdropClick]: (event: MouseEvent) => void;
    /** @private */
    [onChildModalChange]: EventListenerOrEventListenerObject;
    /**
     * Ensures `this[dialog]` is set by synchronously querying the shadow DOM
     * and attaching event listeners if needed.
     * Works around a Safari timing issue where the MutationObserver callback
     * (which normally sets `this[dialog]`) may not have fired yet when
     * `show()` / `dismiss()` run — especially when `heading` or
     * `accessibilityLabel` adds child custom-elements whose own lifecycle
     * microtasks can delay the observer.
     * @private
     */
    [ensureDialogRef](): void;
    /** @private */
    get [isOpen](): boolean;
    /** @private */
    [dismiss](): void;
    /** @private */
    get [hasOpenChildModal](): boolean;
    /** @private */
    [show](): Promise<void>;
    /** @private */
    [hide](): Promise<void>;
    showOverlay(): void;
    hideOverlay(): void;
    toggleOverlay(): void;
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the modal component.
 * @publicDocs
 */
declare class Modal extends ModalBase<typeof tagName$x> implements ModalProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$x]: Modal;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$x]: Omit<ReactProps$x, 'primaryAction' | 'secondaryActions'> & PreactBaseElementPropsWithChildren<Modal>;
        }
    }
}

type RequiredMoneyFieldProps = Required<MoneyFieldProps$1>;
/**
 * Configure the following properties on the money field component.
 * @publicDocs
 */
interface MoneyFieldProps extends Omit<PreactFieldProps, 'value'>, Pick<RequiredMoneyFieldProps, 'max' | 'min' | 'currencyCode'> {
    value: Required<MoneyFieldProps$1>['value'];
}

declare const tagName$w = "s-money-field";
interface ReactProps$w extends Partial<Omit<MoneyFieldProps, 'error' | 'details'>>, FieldReactProps<typeof tagName$w>, Pick<MoneyFieldProps$1, 'id'>, FieldSlotInternalReactProps {
}

declare abstract class MoneyFieldBase extends PreactFieldElement<MoneyFieldProps['autocomplete']> implements Pick<MoneyFieldProps, 'max' | 'min' | 'currencyCode' | 'value'> {
    max: MoneyFieldProps['max'];
    min: MoneyFieldProps['min'];
    currencyCode: MoneyFieldProps['currencyCode'];
    get value(): string;
    set value(value: string);
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the money field component.
 * @publicDocs
 */
declare class MoneyField extends MoneyFieldBase implements MoneyFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$w]: MoneyField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$w]: Omit<ReactProps$w, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<MoneyField>;
        }
    }
}

type NumberFontSize = BodyFontSize;
type NumberFontWeight = TypographyFontWeight;
interface NumberProps extends Required<Pick<TextProps$1, 'accessibilityVisibility' | 'dir'>> {
    /**
     * The semantic tone that's applied to the number, which changes its color to convey meaning.
     *
     * - `info`: Informational content or helpful tips (blue).
     * - `success`: Positive outcomes or successful states (green).
     * - `warning`: Important warnings about potential issues (orange).
     * - `critical`: Urgent problems or destructive actions (red).
     * - `auto`: Automatically determined based on context.
     * - `neutral`: General information without specific intent (gray).
     * - `caution`: Advisory notices that need attention (yellow).
     *
     * @default 'auto'
     */
    tone: Extract<TextProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'caution' | 'critical'>;
    /**
     * The color emphasis applied to the number.
     *
     * - `base`: Standard emphasis for numeric content.
     * - `subdued`: Deemphasized color for secondary or supporting numeric content.
     *
     * @default 'base'
     */
    color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
    /**
     * Font size of the number. The named values also apply their matching
     * line-height and letter-spacing.
     *
     * @default 'auto'
     */
    fontSize: NumberFontSize;
    /**
     * Font weight of the number.
     *
     * @default 'auto'
     */
    fontWeight: NumberFontWeight;
}

declare const tagName$v = "s-number";

interface ReactProps$v extends Partial<NumberProps>, Pick<TextProps$1, 'id' | 'lang' | 'children'> {
    /**
     * The number to display. The component styles the value you pass in — typography, tone, and color — and renders it as given, so format and localize it yourself.
     */
    children?: ComponentChildren$1;
}

/**
 * Configure the following properties on the number component.
 * @publicDocs
 */
declare class Number extends PolarisCustomElement implements NumberProps {
    tone: NumberProps['tone'];
    color: NumberProps['color'];
    fontSize: NumberProps['fontSize'];
    fontWeight: NumberProps['fontWeight'];
    dir: NumberProps['dir'];
    accessibilityVisibility: NumberProps['accessibilityVisibility'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$v]: Number;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$v]: ReactProps$v & PreactBaseElementPropsWithChildren<Number>;
        }
    }
}

/**
 * Configure the following properties on the number field component.
 * @publicDocs
 */
interface NumberFieldProps extends Omit<PreactFieldProps<Required<NumberFieldProps$1>['autocomplete']>, 'value'>, Required<Pick<NumberFieldProps$1, 'inputMode' | 'max' | 'min' | 'prefix' | 'step' | 'suffix'>> {
    value: Required<NumberFieldProps$1>['value'];
    /**
     * The type of virtual keyboard to display on mobile devices.
     *
     * - `decimal`: Shows a numeric keyboard with a decimal point, suitable for prices or measurements.
     * - `numeric`: Shows a numeric keyboard without a decimal point, suitable for whole numbers like quantities.
     *
     * Learn more about the [inputmode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).
     *
     * @default 'decimal'
     */
    inputMode: Required<NumberFieldProps$1>['inputMode'];
}

declare const tagName$u = "s-number-field";
interface ReactProps$u extends Partial<Omit<NumberFieldProps, 'error' | 'details'>>, Pick<NumberFieldProps$1, 'id'>, FieldReactProps<typeof tagName$u>, FieldSlotInternalReactProps {
}

declare abstract class NumberFieldBase extends PreactFieldElement<NumberFieldProps['autocomplete']> implements Pick<NumberFieldProps, 'inputMode' | 'step' | 'max' | 'min' | 'prefix' | 'suffix' | 'value'> {
    get value(): string;
    set value(value: string);
    inputMode: NumberFieldProps['inputMode'];
    step: NumberFieldProps['step'];
    max: NumberFieldProps['max'];
    min: NumberFieldProps['min'];
    prefix: NumberFieldProps['prefix'];
    suffix: NumberFieldProps['suffix'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the number field component.
 * @publicDocs
 */
declare class NumberField extends NumberFieldBase implements NumberFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$u]: NumberField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$u]: Omit<ReactProps$u, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<NumberField>;
        }
    }
}

/**
 * Represents a single option within a select component. Use only as a child of s-select components.
 * @publicDocs
 */
interface OptionProps extends Required<Pick<OptionProps$1, 'disabled' | 'value' | 'selected' | 'defaultSelected'>> {
}

declare const tagName$t = "s-option";
interface ReactProps$t extends Partial<OptionProps>, Pick<OptionProps$1, 'id' | 'children'> {
    /**
     * The text or elements displayed as the option label, which identifies the selectable choice to users in a dropdown or selection list.
     */
    children?: ComponentChildren$1;
}

/**
 * Represents a single option within a select component. Use only as a child of s-select components.
 * @publicDocs
 */
declare class Option extends PolarisCustomElement implements OptionProps {
    selected: OptionProps['selected'];
    defaultSelected: OptionProps['defaultSelected'];
    value: OptionProps['value'];
    disabled: OptionProps['disabled'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$t]: Option;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$t]: ReactProps$t & PreactBaseElementPropsWithChildren<Option>;
        }
    }
}

/**
 * Represents a group of options within a select component. Use only as a child of `s-select` components.
 * @publicDocs
 */
interface OptionGroupProps extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {
    /**
     * Whether the options within this group can be selected or not.
     *
     * @default false
     */
    disabled: Required<OptionGroupProps$1>['disabled'];
    /**
     * The user-facing label for this group of options.
     */
    label: Required<OptionGroupProps$1>['label'];
}

declare const tagName$s = "s-option-group";
interface ReactProps$s extends Partial<OptionGroupProps>, Pick<OptionGroupProps$1, 'id' | 'children'> {
    /**
     * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items within this group.
     */
    children?: ComponentChildren$1;
}

/**
 * Represents a group of options within a select component. Use only as a child of `s-select` components.
 * @publicDocs
 */
declare class OptionGroup extends PolarisCustomElement implements OptionGroupProps {
    disabled: OptionGroupProps['disabled'];
    label: OptionGroupProps['label'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$s]: OptionGroup;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$s]: ReactProps$s & PreactBaseElementPropsWithChildren<OptionGroup>;
        }
    }
}

/**
 * Configure the following properties on the ordered list component.
 * @publicDocs
 */
interface OrderedListProps extends OrderedListProps$1 {
}

declare const tagName$r = "s-ordered-list";
interface ReactProps$r extends Partial<OrderedListProps>, Pick<OrderedListProps$1, 'id'> {
    /**
     * The list entries displayed within the ordered list, where each item is numbered sequentially. Only accepts list item components as children. Each list item represents a single numbered entry in the sequence.
     */
    children?: ComponentChildren$1;
}

/**
 * Configure the following properties on the ordered list component.
 * @publicDocs
 */
declare class OrderedList extends PolarisCustomElement implements OrderedListProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$r]: OrderedList;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$r]: ReactProps$r & PreactBaseElementPropsWithChildren<OrderedList>;
        }
    }
}

/**
 * Use as the outer wrapper of a page.
 * @publicDocs
 */
interface PageProps extends Required<Pick<PageProps$1, 'inlineSize' | 'heading'>> {
    /**
     * The inline size of the page
     * - `base` corresponds to a set default inline size
     * - `large` full width with whitespace
     *
     * @default 'base'
     */
    inlineSize: Extract<PageProps$1['inlineSize'], 'base' | 'large' | 'small'>;
    /**
     * The main page heading
     */
    heading: Required<PageProps$1>['heading'];
}

declare const tagName$q = "s-page";
interface ReactProps$q extends Partial<PageProps>, Pick<PageProps$1, 'id' | 'children'> {
    /**
     * The main page content displayed within the page component, which serves as the primary container for the page's information and interface elements.
     */
    children?: ComponentChildren$1;
    /**
     * The content to display in the aside section of the page.
     *
     * This slot is only rendered when `inlineSize` is "base".
     */
    aside?: ComponentChildren$1;
    /**
     * The primary action for the page.
     *
     * Only accepts a single button component with a `variant` of `primary`.
     *
     */
    primaryAction?: ComponentChildren$1;
    /**
     * The secondary actions for the page.
     *
     * Only accepts button group and button components with a `variant` of `secondary` or `auto`.
     */
    secondaryActions?: ComponentChildren$1;
    /**
     * The navigation back actions for the page.
     *
     * Only accepts link components.
     */
    breadcrumbActions?: ComponentChildren$1;
    /**
     * A slot for content that comes before the main content, such as an `s-banner`.
     */
    supplementalStart?: ComponentChildren$1;
}

declare abstract class PageBase extends PolarisCustomElement implements PageProps {
    inlineSize: PageProps['inlineSize'];
    heading: PageProps['heading'];
    constructor(renderImpl: RenderImpl);
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
}

/**
 * Use as the outer wrapper of a page.
 * @publicDocs
 */
declare class Page extends PageBase implements PageProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$q]: Page;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$q]: Omit<ReactProps$q, 'aside' | 'primaryAction' | 'secondaryActions' | 'breadcrumbActions' | 'supplementalStart'> & PreactBaseElementPropsWithChildren<Page>;
        }
    }
}

type ParagraphFontSize = BodyFontSize;
type ParagraphFontWeight = TypographyFontWeight;
/**
 * Configure the following properties on the paragraph component.
 * @publicDocs
 */
interface ParagraphProps extends Required<Pick<ParagraphProps$1, 'accessibilityVisibility' | 'fontVariantNumeric' | 'tone' | 'dir' | 'color' | 'lineClamp'>> {
    color: Extract<ParagraphProps$1['color'], 'base' | 'subdued'>;
    /**
     * The semantic tone that's applied to the paragraph text, which changes its color to convey meaning.
     *
     * - `info`: Informational content or helpful tips (blue).
     * - `success`: Positive outcomes or successful states (green).
     * - `warning`: Important warnings about potential issues (orange).
     * - `critical`: Urgent problems or destructive actions (red).
     * - `caution`: Advisory notices that need attention (yellow).
     */
    tone: Extract<ParagraphProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'>;
    /**
     * Font size of the paragraph. The named values also apply their matching
     * line-height and letter-spacing.
     *
     * @default 'auto'
     */
    fontSize: ParagraphFontSize;
    /**
     * Font weight of the paragraph.
     *
     * @default 'auto'
     */
    fontWeight: ParagraphFontWeight;
    /**
     * @deprecated Use `Number` for inline numeric values instead.
     */
    fontVariantNumeric: Extract<ParagraphProps$1['fontVariantNumeric'], 'auto' | 'normal' | 'tabular-nums'>;
}

declare const tagName$p = "s-paragraph";
interface ReactProps$p extends Partial<ParagraphProps>, Pick<ParagraphProps$1, 'id' | 'children'> {
    /**
     * The paragraph text content displayed within the paragraph component, which presents a block of related text with appropriate styling.
     */
    children?: ComponentChildren$1;
}

declare abstract class ParagraphBase extends PolarisCustomElement implements Pick<ParagraphProps, 'fontVariantNumeric' | 'fontSize' | 'fontWeight' | 'lineClamp' | 'color' | 'dir' | 'accessibilityVisibility'> {
    fontSize: ParagraphProps['fontSize'];
    fontWeight: ParagraphProps['fontWeight'];
    /**
     * @deprecated Use `Number` for inline numeric values instead.
     */
    fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
    lineClamp: ParagraphProps['lineClamp'];
    abstract tone: string;
    color: ParagraphProps['color'];
    dir: ParagraphProps['dir'];
    accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the paragraph component.
 * @publicDocs
 */
declare class Paragraph extends ParagraphBase implements ParagraphProps {
    tone: ParagraphProps['tone'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$p]: Paragraph;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$p]: ReactProps$p & PreactBaseElementPropsWithChildren<Paragraph>;
        }
    }
}

type PasswordFieldProps = PreactFieldProps<Required<PasswordFieldProps$1>['autocomplete']> & Required<Pick<PasswordFieldProps$1, 'defaultValue' | 'details' | 'disabled' | 'error' | 'labelAccessibilityVisibility' | 'minLength' | 'maxLength' | 'label' | 'name' | 'placeholder' | 'readOnly' | 'required' | 'value'>>;

declare const tagName$o = "s-password-field";
interface ReactProps$o extends Partial<Omit<PasswordFieldProps, 'error' | 'details'>>, Pick<PasswordFieldProps$1, 'id'>, FieldReactProps<typeof tagName$o>, FieldSlotInternalReactProps {
}

declare abstract class PasswordFieldBase extends PreactFieldElement<PasswordFieldProps['autocomplete']> implements Pick<PasswordFieldProps, 'maxLength' | 'minLength'> {
    maxLength: PasswordFieldProps['maxLength'];
    minLength: PasswordFieldProps['minLength'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the password field component.
 * @publicDocs
 */
declare class PasswordField extends PasswordFieldBase implements PasswordFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$o]: PasswordField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$o]: Omit<ReactProps$o, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<PasswordField>;
        }
    }
}

interface PopoverProps extends Required<Pick<PopoverProps$1, 'blockSize' | 'inlineSize' | 'maxBlockSize' | 'maxInlineSize' | 'minBlockSize' | 'minInlineSize'>> {
}

declare const tagName$n = "s-popover";
interface ReactProps$n extends Partial<PopoverProps>, Pick<PopoverProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the popover, which appears in an overlay positioned relative
     * to its trigger element. Typically contains menus, action lists, or supplementary information.
     */
    children?: ComponentChildren$1;
    /**
     * A callback fired immediately when the popover starts to hide, before any exit animation.
     * Use to perform cleanup or save state before the popover dismisses.
     */
    onHide?: (event: CallbackEvent<typeof tagName$n>) => void | null;
    /**
     * A callback fired immediately when the popover starts to show, before any entrance animation.
     * Use to prepare content or update positioning logic.
     */
    onShow?: (event: CallbackEvent<typeof tagName$n>) => void | null;
    /**
     * A callback fired after the popover has fully hidden and any exit animation completes.
     * Use to reset selections or update the trigger button state.
     */
    onAfterHide?: (event: CallbackEvent<typeof tagName$n>) => void | null;
    /**
     * A callback fired after the popover has fully shown and any entrance animation completes.
     * Use to focus an element inside the popover or announce content to screen readers.
     */
    onAfterShow?: (event: CallbackEvent<typeof tagName$n>) => void | null;
    /**
     * A callback fired when the popover visibility toggles. Use for unified open/close
     * handling when you don't need separate show and hide logic.
     */
    onToggle?: (event: CallbackToggleEvent<typeof tagName$n>) => void | null;
    /**
     * A callback fired after the popover visibility toggle completes and any animation finishes.
     * Use for post-transition updates.
     */
    onAfterToggle?: (event: CallbackToggleEvent<typeof tagName$n>) => void | null;
}

declare class PreactPopoverElement<TTagName extends keyof HTMLElementTagNameMap> extends PreactOverlayElement implements PopoverProps {
    constructor(renderImpl: RenderImpl);
    /**
     * The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes).
     *
     * Block size adjusts based on the writing direction: in horizontal layouts, it controls the height; in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.
     *
     * Learn more about the [block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
     *
     * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
     * - `auto`: Automatically sizes based on content and layout constraints.
     */
    blockSize: BoxProps['blockSize'];
    /**
     * The minimum vertical size of the element in standard layouts (min-height in left-to-right or right-to-left writing modes).
     *
     * Prevents the element from becoming smaller than this size along the block axis.
     *
     * Learn more about the [min-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
     */
    minBlockSize: BoxProps['minBlockSize'];
    /**
     * The maximum vertical size of the element in standard layouts (max-height in left-to-right or right-to-left writing modes).
     *
     * Prevents the element from becoming larger than this size along the block axis.
     *
     * Learn more about the [max-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
     */
    maxBlockSize: BoxProps['maxBlockSize'];
    /**
     * The horizontal size of the element in standard layouts (width in left-to-right or right-to-left writing modes).
     *
     * Inline size adjusts based on the writing direction: in horizontal layouts, it controls the width; in vertical layouts, it controls the height. This ensures consistent behavior across different text directions.
     *
     * Learn more about the [inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
     *
     * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
     * - `auto`: Automatically sizes based on content and layout constraints.
     */
    inlineSize: BoxProps['inlineSize'];
    /**
     * The minimum horizontal size of the element in standard layouts (min-width in left-to-right or right-to-left writing modes).
     *
     * Prevents the element from becoming smaller than this size along the inline axis.
     *
     * Learn more about the [min-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
     */
    minInlineSize: BoxProps['minInlineSize'];
    /**
     * The maximum horizontal size of the element in standard layouts (max-width in left-to-right or right-to-left writing modes).
     *
     * Prevents the element from becoming larger than this size along the inline axis.
     *
     * Learn more about the [max-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
     */
    maxInlineSize: BoxProps['maxInlineSize'];
}

/**
 * Configure the following properties on the popover component.
 * @publicDocs
 */
declare class Popover extends PreactPopoverElement<typeof tagName$n> implements PopoverProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$n]: Popover;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$n]: ReactProps$n & PreactBaseElementPropsWithChildren<Popover>;
        }
    }
}

type PressButtonBaseProps = Required<Pick<PressButtonProps$1, 'accessibilityLabel' | 'disabled' | 'icon' | 'inlineSize' | 'lang' | 'loading' | 'tone' | 'variant' | 'pressed' | 'defaultPressed'>>;
interface PressButtonProps extends PressButtonBaseProps {
    tone: Extract<PressButtonProps$1['tone'], 'neutral'>;
    icon: IconProps['type'];
    variant: Extract<PressButtonProps$1['variant'], 'secondary' | 'tertiary'>;
}

declare const tagName$m = "s-press-button";
interface ReactProps$m extends Partial<PressButtonProps>, Pick<PressButtonProps$1, 'children'> {
    /**
     * The content of the PressButton.
     */
    children?: ComponentChildren$1;
    onClick?: ((event: CallbackEvent<typeof tagName$m>) => void) | null;
    onFocus?: ((event: CallbackEvent<typeof tagName$m>) => void) | null;
    onBlur?: ((event: CallbackEvent<typeof tagName$m>) => void) | null;
}

declare class PressButton extends PolarisCustomElement implements PressButtonProps {
    disabled: PressButtonProps['disabled'];
    icon: PressButtonProps['icon'];
    loading: PressButtonProps['loading'];
    variant: PressButtonProps['variant'];
    tone: PressButtonProps['tone'];
    inlineSize: PressButtonProps['inlineSize'];
    get pressed(): boolean;
    set pressed(pressed: PressButtonProps['pressed']);
    defaultPressed: PressButtonProps['defaultPressed'];
    onclick: CallbackEventListener<typeof tagName$m> | null;
    onblur: CallbackEventListener<typeof tagName$m> | null;
    onfocus: CallbackEventListener<typeof tagName$m> | null;
    accessibilityLabel: PressButtonProps['accessibilityLabel'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$m]: PressButton;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$m]: ReactProps$m & PreactBaseElementPropsWithChildren<PressButton>;
        }
    }
}

/**
 * Configure the following properties on the progress component.
 * @publicDocs
 */
interface ProgressProps extends Pick<ProgressProps$1, 'accessibilityLabel' | 'max' | 'tone' | 'value'> {
    /**
     * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey what is progressing.
     */
    accessibilityLabel: Required<ProgressProps$1>['accessibilityLabel'];
    /**
     * How much work the task requires in total. Must be greater than `0`.
     *
     * @default 1
     */
    max: Required<ProgressProps$1>['max'];
    /**
     * The semantic meaning and color treatment of the component.
     *
     * - `auto`: Automatically determined based on context.
     * - `neutral`: General information without specific intent.
     * - `info`: Informational content or helpful tips.
     * - `success`: Positive outcomes or successful states.
     * - `caution`: Advisory notices that need attention.
     * - `warning`: Important warnings about potential issues.
     * - `critical`: Urgent problems or destructive actions.
     *
     * @default 'auto'
     */
    tone: Extract<ProgressProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'>;
    /**
     * How much of the task has been completed, as a number between `0` and `max`.
     *
     * Without a `value` the progress is indeterminate: the task is ongoing with no
     * indication of how long it is expected to take.
     *
     * @default 0
     */
    value: Required<ProgressProps$1>['value'];
}

declare const tagName$l = "s-progress";
interface ReactProps$l extends Partial<ProgressProps>, Pick<ProgressProps$1, 'id'> {
}

/**
 * Configure the following properties on the progress component.
 * @publicDocs
 */
declare class Progress extends PolarisCustomElement implements ProgressProps {
    accessibilityLabel: string;
    max: ProgressProps['max'];
    tone: ProgressProps['tone'];
    value: ProgressProps['value'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$l]: Progress;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$l]: ReactProps$l & PreactBaseElementProps<Progress>;
        }
    }
}

declare const tagName$k = "s-query-container";
interface ReactProps$k extends Partial<QueryContainerProps$1>, Pick<QueryContainerProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the query container component, which enables container queries for responsive styling based on the container's size rather than the viewport.
     */
    children?: ComponentChildren$1;
}

/**
 * Configure the following properties on the query container component.
 * @publicDocs
 */
interface QueryContainerProps extends Required<Pick<QueryContainerProps$1, 'id' | 'containerName'>> {
    /**
     * An identifier for this container that you can reference in CSS container queries to apply styles based on this specific container's size.
     *
     * All query container components automatically receive a container name of `s-default`. You can omit the container name in your queries, so `@container (inline-size <= 300px)` is equivalent to `@container s-default (inline-size <= 300px)`.
     *
     * When you provide a custom `containerName`, it's added alongside `s-default`. For example, `containerName="product-card"` results in `s-default product-card` being set on the `container-name` CSS property, allowing you to target this container with `@container product-card (inline-size <= 300px)`.
     *
     * Learn more about the [container-name property](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name).
     *
     * @default ''
     *
     * @implementation You must always have a CSS `container-name` of `s-default` for this component.
     */
    containerName: Required<QueryContainerProps$1>['containerName'];
}

/**
 * Configure the following properties on the query container component.
 * @publicDocs
 */
declare class QueryContainer extends PolarisCustomElement implements QueryContainerProps {
    containerName: QueryContainerProps['containerName'];
    /** @private */
    static globalStylesApplied: boolean;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$k]: QueryContainer;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$k]: ReactProps$k & PreactBaseElementPropsWithChildren<QueryContainer>;
        }
    }
}

/**
 * Base properties shared between ScrollBox and InternalScrollBox.
 */

/**
 * Base properties for ScrollBox components.
 * Extends BoxProps but overrides overflow and accessibilityRole with scroll-specific types.
 */
interface ScrollBoxBaseProps extends Omit<BoxProps, 'overflow' | 'accessibilityRole'> {
    /**
     * Sets the overflow behavior of the element.
     * @default 'auto'
     */
    overflow: MaybeTwoValuesShorthandProperty<OverflowKeyword>;
    /**
     * Sets the semantic meaning of the component's content.
     * @default 'generic'
     */
    accessibilityRole: ScrollAccessibilityRole;
    /**
     * A label used to describe the scroll container for assistive technologies.
     */
    accessibilityLabel: string;
    /**
     * Controls scroll snap behavior.
     * @default 'none'
     */
    snapType: ScrollSnapType;
    /**
     * Offset for scroll snap alignment points.
     * @default 'base'
     */
    scrollPadding: SpacingKeyword;
    /**
     * Scroll margin for the element (CSS-like 1-to-4-value shorthand syntax).
     * @default '0'
     */
    scrollMargin: MaybeAllValuesShorthandProperty<SizeUnits>;
}
/**
 * Public ScrollBox properties (same as base for now).
 */
type ScrollBoxProps = ScrollBoxBaseProps;

declare const tagName$j = "s-scroll-box";
interface ReactProps$j extends Partial<ScrollBoxProps>, Pick<BoxProps$1, 'id' | 'children'> {
    /**
     * The content of the ScrollBox.
     */
    children?: ComponentChildren$1;
    /**
     * Callback fired when the scroll container is scrolled.
     */
    onscroll?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
    /**
     * Callback fired when the scroll container reaches an edge.
     */
    onscrolltoedge?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
}

declare const getScrollContainer: unique symbol;
declare abstract class ScrollBoxBase<TTagName extends keyof HTMLElementTagNameMap> extends PolarisCustomElement implements ScrollBoxBaseProps {
    overflow: ScrollBoxBaseProps['overflow'];
    snapType: ScrollBoxBaseProps['snapType'];
    scrollPadding: ScrollBoxBaseProps['scrollPadding'];
    scrollMargin: ScrollBoxBaseProps['scrollMargin'];
    accessibilityRole: ScrollBoxBaseProps['accessibilityRole'];
    accessibilityLabel: ScrollBoxBaseProps['accessibilityLabel'];
    background: ScrollBoxBaseProps['background'];
    blockSize: ScrollBoxBaseProps['blockSize'];
    minBlockSize: ScrollBoxBaseProps['minBlockSize'];
    maxBlockSize: ScrollBoxBaseProps['maxBlockSize'];
    inlineSize: ScrollBoxBaseProps['inlineSize'];
    minInlineSize: ScrollBoxBaseProps['minInlineSize'];
    maxInlineSize: ScrollBoxBaseProps['maxInlineSize'];
    padding: ScrollBoxBaseProps['padding'];
    paddingBlock: ScrollBoxBaseProps['paddingBlock'];
    paddingBlockStart: ScrollBoxBaseProps['paddingBlockStart'];
    paddingBlockEnd: ScrollBoxBaseProps['paddingBlockEnd'];
    paddingInline: ScrollBoxBaseProps['paddingInline'];
    paddingInlineStart: ScrollBoxBaseProps['paddingInlineStart'];
    paddingInlineEnd: ScrollBoxBaseProps['paddingInlineEnd'];
    border: ScrollBoxBaseProps['border'];
    borderWidth: ScrollBoxBaseProps['borderWidth'];
    borderStyle: ScrollBoxBaseProps['borderStyle'];
    borderColor: ScrollBoxBaseProps['borderColor'];
    borderRadius: ScrollBoxBaseProps['borderRadius'];
    display: ScrollBoxBaseProps['display'];
    accessibilityVisibility: ScrollBoxBaseProps['accessibilityVisibility'];
    [getScrollContainer](): HTMLElement | null | undefined;
    constructor(renderImpl: RenderImpl);
}

declare class ScrollBox extends ScrollBoxBase<typeof tagName$j> implements ScrollBoxProps {
    constructor();
    adoptedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$j]: ScrollBox;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$j]: ReactProps$j & PreactBaseElementPropsWithChildren<ScrollBox>;
        }
    }
}

type SearchFieldProps = PreactFieldProps<
/**
 * @default 'on'
 */
Required<TextFieldProps$1>['autocomplete']> & Required<Pick<TextFieldProps$1, 'defaultValue' | 'details' | 'disabled' | 'error' | 'labelAccessibilityVisibility' | 'minLength' | 'maxLength' | 'label' | 'name' | 'placeholder' | 'readOnly' | 'required' | 'value'>>;

declare const tagName$i = "s-search-field";
interface ReactProps$i extends Partial<Omit<SearchFieldProps, 'error' | 'details'>>, Pick<TextFieldProps$1, 'id'>, FieldReactProps<typeof tagName$i>, FieldSlotInternalReactProps {
}

declare abstract class SearchFieldBase extends PreactFieldElement<SearchFieldProps['autocomplete']> implements Pick<SearchFieldProps, 'maxLength' | 'minLength'> {
    maxLength: SearchFieldProps['maxLength'];
    minLength: SearchFieldProps['minLength'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the search field component.
 * @publicDocs
 */
declare class SearchField extends SearchFieldBase implements SearchFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$i]: SearchField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$i]: Omit<ReactProps$i, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<SearchField>;
        }
    }
}

type RequiredSectionProps = Required<SectionProps$1>;
/**
 * Configure the following properties on the section component.
 * @publicDocs
 */
interface SectionProps extends Pick<RequiredSectionProps, 'accessibilityLabel' | 'heading' | 'padding'> {
    /**
     * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
     */
    accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
    /**
     * The heading text displayed at the top of the section. This heading provides a title for the section's content and automatically uses the appropriate semantic heading level (h2, h3, h4) based on nesting depth to maintain proper document structure.
     */
    heading: RequiredSectionProps['heading'];
    /**
     * Supporting text that expands on the heading, rendered beneath it in a subdued treatment.
     *
     * This is not a heading: it adds no entry to the document outline, doesn't change the heading level of the section's children, and isn't announced as part of the heading. Keep whatever distinguishes this section from another in `heading`, since that is what someone navigating by heading hears.
     */
    subheading: string;
    /**
     * The padding applied to all edges of the element's content.
     *
     * - `base`: applies padding that is appropriate for the element. Note that it might result in no padding if
     * this is the right design decision in a particular context.
     * - `none`: removes all padding from the element's content. This can be useful when elements inside the section
     * need to span to the edge of the section. For example, a full-width image. In this case, rely on `s-box` with a
     * padding of 'base' to bring back the desired padding for the rest of the content. The `heading` and header
     * actions keep their padding, so they can be combined with `none`.
     *
     * @default 'base'
     */
    padding: RequiredSectionProps['padding'];
}

declare const tagName$h = "s-section";
interface ReactProps$h extends Partial<SectionProps>, Pick<SectionProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the section component, which groups related elements together in a logical unit with an optional heading.
     */
    children?: ComponentChildren$1;
    /**
     * The primary action button or link, representing the main or most important action available in this context. Typically displayed with higher visual prominence than secondary actions to establish clear hierarchy.
     */
    primaryAction?: ComponentChildren$1;
    /**
     * Additional action buttons or links that provide alternative or supporting actions. Visually de-emphasized compared to the primary action.
     *
     * A ButtonGroup holding an action and the icon-only activator for its Menu renders as one segmented group with a chevron activator. The group needs an `accessibilityLabel`, and must hold exactly one Button with text followed by one Button with no text that has an `accessibilityLabel` and a `commandFor` opening a Menu, both with a `variant` of `secondary` or `auto`.
     */
    secondaryActions?: ComponentChildren$1;
    /**
     * A decorative visual that reinforces the heading, rendered before it.
     *
     * Accepts a single Icon with a `size` of `base`, or an icon-only Badge (`icon` set, no text content) with a `size` of `large`. The heading identifies the section, so this content is not announced by assistive technologies, and it is not rendered at all when the section has no `heading`.
     */
    graphic?: ComponentChildren$1;
    /**
     * Additional contextual information that qualifies the heading, rendered inline beside the heading text.
     *
     * Only accepts Badge, Icon, Button, Menu, Text, Avatar, Thumbnail, and Tooltip elements. Text must use `tone`, `fontSize`, and `fontWeight` of `auto`; Icon, Avatar, and Thumbnail must use `size="base"`; Badge must use `size="base"` and `color="base"`; Button must use `inlineSize="auto"`.
     *
     * A Tooltip an accessory element's `interestFor` points at can be slotted here beside it.
     */
    accessory?: ComponentChildren$1;
    /**
     * Status or metadata that describes the section as a whole rather than qualifying its heading, rendered at the inline-end of the header before any actions.
     *
     * This is not an action. Only accepts Badge, Avatar, Text, Icon, and Thumbnail elements, under the same prop constraints as `accessory`.
     */
    supplemental?: ComponentChildren$1;
}

declare abstract class SectionBase extends PolarisCustomElement implements SectionProps {
    constructor(renderImpl: RenderImpl);
    /**
     * The element the section currently renders as its graphic, which sizes a
     * Badge inside it.
     * @private
     */
    setGraphicNode(node: Element | null): void;
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
    accessibilityLabel: SectionProps['accessibilityLabel'];
    heading: SectionProps['heading'];
    subheading: SectionProps['subheading'];
    padding: SectionProps['padding'];
}

/**
 * Configure the following properties on the section component.
 * @publicDocs
 */
declare class Section extends SectionBase implements SectionProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$h]: Section;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$h]: Omit<ReactProps$h, 'primaryAction' | 'secondaryActions' | 'graphic' | 'accessory' | 'supplemental'> & PreactBaseElementPropsWithChildren<Section>;
        }
    }
}

/**
 * Configure the following properties on the select component.
 * @publicDocs
 */
interface SelectProps extends Omit<PreactInputProps, 'value'>, Required<Pick<SelectProps$1, 'details' | 'disabled' | 'error' | 'label' | 'name' | 'placeholder' | 'required' | 'icon' | 'labelAccessibilityVisibility'>> {
    value: Required<SelectProps$1>['value'];
    icon: IconProps['type'];
}

declare const tagName$g = "s-select";
interface ReactProps$g extends Partial<Omit<SelectProps, 'error' | 'details'>>, Pick<SelectProps$1, 'id' | 'children'>, FieldSlotInternalReactProps {
    /**
     * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items, and option group components to organize related options into logical groups with labels.
     */
    children?: ComponentChildren$1;
    onChange?: (event: CallbackEvent<typeof tagName$g>) => void;
    onInput?: (event: CallbackEvent<typeof tagName$g>) => void;
    onBlur?: (event: CallbackEvent<typeof tagName$g>) => void;
    onFocus?: (event: CallbackEvent<typeof tagName$g>) => void;
}

declare const usedFirstOptionSymbol: unique symbol;
declare const hasInitialValueSymbol: unique symbol;

declare abstract class SelectBase extends PreactInputElement implements Pick<SelectProps, 'icon' | 'details' | 'error' | 'label' | 'placeholder' | 'required' | 'labelAccessibilityVisibility'> {
    icon: SelectProps['icon'];
    details: SelectProps['details'];
    error: SelectProps['error'];
    label: SelectProps['label'];
    placeholder: SelectProps['placeholder'];
    required: SelectProps['required'];
    labelAccessibilityVisibility: SelectProps['labelAccessibilityVisibility'];
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
    constructor(renderImpl: RenderImpl);
    /**
     * used to determine if no value or defaultValue was set, in which case the first non-disabled option was used
     *
     * this is important because we need to use the placeholder in these situations, even though the first value will be submitted as part of the form
     * @private
     */
    [usedFirstOptionSymbol]: boolean;
    /**
     * @private
     */
    [hasInitialValueSymbol]: boolean;
    get value(): string;
    set value(value: string);
    /** @private */
    formResetCallback(): void;
}

/**
 * Configure the following properties on the select component.
 * @publicDocs
 */
declare class Select extends SelectBase implements SelectProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$g]: Select;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$g]: Omit<ReactProps$g, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementPropsWithChildren<Select>;
        }
    }
}

/**
 * Configure the following properties on the spinner component.
 * @publicDocs
 */
interface SpinnerProps extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
    /**
     * The size of the loading spinner.
     *
     * - `base`: Default size suitable for inline loading indicators or standard UI contexts.
     * - `large`: Larger spinner for more prominent loading states.
     * - `large-100`: Extra large spinner for full-page or emphasized loading states.
     */
    size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
    /**
     * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
     */
    accessibilityLabel: Required<SpinnerProps$1>['accessibilityLabel'];
}

declare const tagName$f = "s-spinner";
interface ReactProps$f extends Partial<SpinnerProps>, Pick<SpinnerProps$1, 'id'> {
}

/**
 * Configure the following properties on the spinner component.
 * @publicDocs
 */
declare class Spinner extends PolarisCustomElement implements SpinnerProps {
    accessibilityLabel: string;
    size: SpinnerProps['size'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$f]: Spinner;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$f]: ReactProps$f & PreactBaseElementProps<Spinner>;
        }
    }
}

type AlignedStackProps = Required<StackProps$1>;
type ResponsiveStackProps = MakeResponsivePick<AlignedStackProps, 'gap' | 'rowGap' | 'columnGap' | 'direction'>;
/**
 * Configure the following properties on the stack component.
 * @publicDocs
 */
interface StackProps extends BoxProps, Pick<Required<AlignedStackProps>, 'justifyContent' | 'alignItems' | 'alignContent'> {
    /**
     * Controls the distribution of children along the inline axis (horizontally in horizontal writing modes).
     *
     * Use this to position items along the primary axis of the stack - horizontally for inline stacks or vertically for block stacks when wrapped into multiple lines.
     *
     * @default 'normal'
     */
    justifyContent: JustifyContentKeyword;
    /**
     * Controls the alignment of children along the block axis (vertically in horizontal writing modes).
     *
     * Use this to align items perpendicular to the stack direction - vertically for inline stacks or horizontally for block stacks.
     *
     * @default 'normal'
     */
    alignItems: AlignItemsKeyword;
    /**
     * Controls the distribution of lines along the block axis when content wraps into multiple lines.
     *
     * This property only affects stacks with wrapping content. For single-line stacks, use `alignItems` instead.
     *
     * @default 'normal'
     */
    alignContent: AlignContentKeyword;
    /**
     * Adjusts spacing between elements.
     *
     * Accepts:
     * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value applied to both axes, such as `large-100`
     * - A pair of values, such as `large-100 large-500`, to set the inline and block axes respectively
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
     *
     * @default 'none'
     */
    gap: ResponsiveStackProps['gap'];
    /**
     * Adjusts spacing between elements in the block axis. This overrides the row value of `gap`.
     *
     * Accepts:
     * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value, such as `large-100`
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
     *
     * @default '' - meaning no override
     */
    rowGap: ResponsiveStackProps['rowGap'];
    /**
     * Adjusts spacing between elements in the inline axis. This overrides the column value of `gap`.
     *
     * Accepts:
     * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value, such as `large-100`
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
     *
     * @default '' - meaning no override
     */
    columnGap: ResponsiveStackProps['columnGap'];
    /**
     * The direction in which the stack's children are placed within the stack.
     *
     * Accepts:
     * - A single value, either `inline` or `block`
     * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported direction values as a query value
     *
     * @default 'block'
     *
     * @implementation the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
     */
    direction: ResponsiveStackProps['direction'];
}

declare const tagName$e = "s-stack";
interface ReactProps$e extends Partial<StackProps>, Pick<StackProps$1, 'id' | 'children'> {
    /**
     * The child elements displayed within the stack component, which are arranged vertically or horizontally with consistent spacing.
     */
    children?: ComponentChildren$1;
}

/**
 * Configure the following properties on the stack component.
 * @publicDocs
 */
declare class Stack extends BoxElement implements StackProps {
    constructor();
    direction: StackProps['direction'];
    justifyContent: StackProps['justifyContent'];
    alignItems: StackProps['alignItems'];
    alignContent: StackProps['alignContent'];
    gap: StackProps['gap'];
    rowGap: StackProps['rowGap'];
    columnGap: StackProps['columnGap'];
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$e]: Stack;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$e]: ReactProps$e & PreactBaseElementPropsWithChildren<Stack>;
        }
    }
}

/**
 * Configure the following properties on the switch component.
 * @publicDocs
 */
interface SwitchProps extends PreactCheckboxProps, Required<Pick<SwitchProps$1, 'labelAccessibilityVisibility'>> {
}

declare const tagName$d = "s-switch";
interface ReactProps$d extends Partial<SwitchProps>, Pick<SwitchProps$1, 'id'> {
    /**
     * A callback fired when the switch state changes and the user has finished interacting with it.
     */
    onChange?: ((event: CallbackEvent<typeof tagName$d>) => void) | null;
    /**
     * A callback fired when the switch state changes, including intermediate states during user interaction.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$d>) => void) | null;
    onBlur?: ((event: CallbackEvent<typeof tagName$d>) => void) | null;
}

declare abstract class SwitchBase extends PreactCheckboxElement implements Pick<SwitchProps, 'labelAccessibilityVisibility'> {
    labelAccessibilityVisibility: SwitchProps['labelAccessibilityVisibility'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the switch component.
 * @publicDocs
 */
declare class Switch extends SwitchBase implements SwitchProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$d]: Switch;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$d]: ReactProps$d & PreactBaseElementProps<Switch>;
        }
    }
}

/**
 * Configure the following properties on the table component.
 * @publicDocs
 */
interface TableProps extends Required<Pick<TableProps$1, 'loading' | 'paginate' | 'hasPreviousPage' | 'hasNextPage' | 'variant'>> {
    /**
     * The layout variant of the table component.
     *
     * - `list`: Always displays as a list layout.
     * - `auto`: Automatically displays as a table on wide screens and as a list on narrow screens.
     *
     * @default 'auto'
     */
    variant: Extract<TableProps$1['variant'], 'list' | 'auto'>;
}

declare const tagName$c = "s-table";
interface ReactProps$c extends Partial<TableProps>, Pick<TableProps$1, 'id' | 'children' | 'onNextPage' | 'onPreviousPage'> {
    /**
     * The table structure displayed within the table component, including table headers, rows, and cells that organize data in a grid format.
     */
    children?: ComponentChildren$1;
    /**
     * Additional filters to display in the table, such as search fields or other input components that allow users to narrow down the displayed data.
     */
    filters?: ComponentChildren$1;
}

type HeaderFormat = Extract<TableHeaderProps$1['format'], 'base' | 'currency' | 'numeric'>;
/**
 * The table header component represents a single column header within a table header row. Use table header as a child of table header row to define column headings and optionally enable column sorting.
 *
 * Table header provides semantic meaning for screen readers and can include sorting controls when configured. Each header corresponds to a column in the table body.
 * @publicDocs
 */
interface TableHeaderProps extends Pick<TableHeaderProps$1, 'listSlot' | 'format'> {
    /**
     * The content designation for this column when the table displays in list variant on mobile devices.
     *
     * @default 'labeled'
     */
    listSlot: Extract<TableHeaderProps$1['listSlot'], 'primary' | 'secondary' | 'labeled' | 'kicker' | 'inline'>;
    /**
     * The format of the column that controls styling and alignment of cell content.
     *
     * @default 'base'
     */
    format: HeaderFormat;
}

declare const actualTableVariantSymbol: unique symbol;
declare const tableHeadersSharedDataSymbol: unique symbol;
type ActualTableVariant = 'table' | 'list';
declare const elementInternals: unique symbol;

/**
 * Configure the following properties on the table component.
 * @publicDocs
 */
declare class Table extends PolarisCustomElement implements TableProps {
    /** @private */
    [elementInternals]: ElementInternals;
    variant: TableProps['variant'];
    loading: TableProps['loading'];
    paginate: TableProps['paginate'];
    hasPreviousPage: TableProps['hasPreviousPage'];
    hasNextPage: TableProps['hasNextPage'];
    onpreviouspage: CallbackEventListener<typeof tagName$c> | null;
    onnextpage: CallbackEventListener<typeof tagName$c> | null;
    /**
     * @private
     * The actual table variant, which is either 'table' or 'list'.
     */
    [actualTableVariantSymbol]: AddedContext<ActualTableVariant>;
    /** @private */
    [tableHeadersSharedDataSymbol]: AddedContext<{
        listSlot: TableHeaderProps["listSlot"];
        textContent: string;
        format: HeaderFormat;
    }[]>;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$c]: Table;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$c]: Omit<ReactProps$c, 'filters'> & PreactBaseElementPropsWithChildren<Table>;
        }
    }
}

/**
 * The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry.
 *
 * Table body must contain table row components, which in turn contain table cell components for the actual data values.
 * @publicDocs
 */
interface TableBodyProps extends TableBodyProps$1 {
    /**
     * The rows containing the main data content of the table.
     * In the `table` variant, this represents the semantic table body. In the `list` variant, this might not have semantic meaning but still contains the data rows.
     */
    children?: TableBodyProps$1['children'];
}

declare const tagName$b = "s-table-body";
interface ReactProps$b extends Partial<TableBodyProps>, Pick<TableBodyProps$1, 'id' | 'children'> {
    /**
     * The rows containing the main data content of the table.
     * In the `table` variant, this represents the semantic table body. In the `list` variant, this might not have semantic meaning but still contains the data rows.
     */
    children?: ComponentChildren$1;
}

/**
 * The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry.
 *
 * Table body must contain table row components, which in turn contain table cell components for the actual data values.
 * @publicDocs
 */
declare class TableBody extends PolarisCustomElement implements TableBodyProps {
    /** @private */
    [elementInternals]: ElementInternals;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$b]: TableBody;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$b]: ReactProps$b & PreactBaseElementPropsWithChildren<TableBody>;
        }
    }
}

/**
 * The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table.
 *
 * Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.
 * @publicDocs
 */
interface TableCellProps extends TableCellProps$1 {
    /**
     * The content displayed within the table cell, which represents a single data point in the table's grid structure.
     */
    children?: TableCellProps$1['children'];
}

declare const tagName$a = "s-table-cell";
interface ReactProps$a extends Partial<TableCellProps>, Pick<TableCellProps$1, 'id' | 'children'> {
    /**
     * The content displayed within the table cell, which represents a single data point in the table's grid structure.
     */
    children?: ComponentChildren$1;
}

declare const headerFormatSymbol: unique symbol;

/**
 * The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table.
 *
 * Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.
 * @publicDocs
 */
declare class TableCell extends PolarisCustomElement implements TableCellProps {
    /** @private */
    [elementInternals]: ElementInternals;
    constructor();
    /** @private */
    get [headerFormatSymbol](): HeaderFormat;
    /** @private */
    set [headerFormatSymbol](format: HeaderFormat);
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$a]: TableCell;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$a]: ReactProps$a & PreactBaseElementPropsWithChildren<TableCell>;
        }
    }
}

declare const tagName$9 = "s-table-header";
interface ReactProps$9 extends Partial<TableHeaderProps>, Pick<TableHeaderProps$1, 'id' | 'children'> {
    /**
     * The heading of the column in the `table` variant, and the label of its data in `list` variant.
     */
    children?: ComponentChildren$1;
}

/**
 * The table header component represents a single column header within a table header row. Use table header as a child of table header row to define column headings and optionally enable column sorting.
 *
 * Table header provides semantic meaning for screen readers and can include sorting controls when configured. Each header corresponds to a column in the table body.
 * @publicDocs
 */
declare class TableHeader extends PolarisCustomElement implements TableHeaderProps {
    /** @private */
    [elementInternals]: ElementInternals;
    listSlot: TableHeaderProps['listSlot'];
    format: TableHeaderProps['format'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$9]: TableHeader;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$9]: ReactProps$9 & PreactBaseElementPropsWithChildren<TableHeader>;
        }
    }
}

/**
 * The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels.
 *
 * Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.
 * @publicDocs
 */
interface TableHeaderRowProps extends TableHeaderRowProps$1 {
    /**
     * The header cells that define the columns of the table.
     * Only accepts table header components as children, with each header representing a column and providing its label.
     */
    children?: TableHeaderRowProps$1['children'];
}

declare const tagName$8 = "s-table-header-row";
interface ReactProps$8 extends Partial<TableHeaderRowProps>, Pick<TableHeaderRowProps$1, 'id' | 'children'> {
    /**
     * The header cells that define the columns of the table.
     * Only accepts table header components as children, with each header representing a column and providing its label.
     */
    children?: ComponentChildren$1;
}

/**
 * The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels.
 *
 * Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.
 * @publicDocs
 */
declare class TableHeaderRow extends PolarisCustomElement implements TableHeaderRowProps {
    /** @private */
    [elementInternals]: ElementInternals;
    constructor();
    /** @private */
    connectedCallback(): void;
    /** @private */
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$8]: TableHeaderRow;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$8]: ReactProps$8 & PreactBaseElementPropsWithChildren<TableHeaderRow>;
        }
    }
}

/**
 * The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table.
 *
 * Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.
 * @publicDocs
 */
interface TableRowProps extends Pick<TableRowProps$1, 'children' | 'clickDelegate'> {
    /**
     * The data cells displayed within this table row, with each cell containing content for its corresponding column.
     * Only accepts table cell components as children.
     */
    children?: TableRowProps$1['children'];
    /**
     * The ID of an interactive element, such as `s-link`, in the row that will be the target of the click when the row is clicked.
     * This is the primary action for the row; it should not be used for secondary actions.
     *
     * This is a click-only affordance, and does not introduce any keyboard or screen reader affordances.
     * Which is why the target element must be in the table; so that keyboard and screen reader users can interact with it normally.
     *
     * @implementation no focus or keyboard affordances are introduced by this property. No aria attributes need to be added to the table row.
     * @implementation the row and/or delegate should have some affordance that indicates it is clickable. This may be a background color, a border, or a hover effect
     */
    clickDelegate?: TableRowProps$1['clickDelegate'];
}

declare const tagName$7 = "s-table-row";
interface ReactProps$7 extends Partial<TableRowProps>, Pick<TableRowProps$1, 'id' | 'children'> {
    /**
     * The data cells displayed within this table row, with each cell containing content for its corresponding column.
     * Only accepts table cell components as children.
     */
    children?: ComponentChildren$1;
}

/**
 * The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table.
 *
 * Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.
 * @publicDocs
 */
declare class TableRow extends PolarisCustomElement implements TableRowProps {
    /** @private */
    [elementInternals]: ElementInternals;
    constructor();
    clickDelegate: string;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$7]: TableRow;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$7]: ReactProps$7 & PreactBaseElementPropsWithChildren<TableRow>;
        }
    }
}

type TextFontSize = BodyFontSize;
type TextFontWeight = TypographyFontWeight;
/**
 * Configure the following properties on the text component.
 * @publicDocs
 */
interface TextProps extends Required<Pick<TextProps$1, 'accessibilityVisibility' | 'dir' | 'color' | 'type' | 'tone' | 'fontVariantNumeric' | 'interestFor'>> {
    color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
    /**
     * The semantic type and styling treatment for the text content.
     *
     * Other presentation properties on text override the default styling.
     *
     * - `strong`: Emphasizes the text with strong importance, typically displayed in bold.
     * - `generic`: Standard text with no special semantic meaning or styling.
     * - `address`: Marks the text as contact information, such as a physical or email address.
     * - `redundant`: Indicates the text is redundant or duplicated information for screen reader context.
     *
     * @default 'generic'
     */
    type: Extract<TextProps$1['type'], 'address' | 'redundant' | 'strong' | 'generic'>;
    /**
     * The semantic tone that's applied to the text, which changes its color to convey meaning.
     *
     * - `info`: Informational content or helpful tips (blue).
     * - `success`: Positive outcomes or successful states (green).
     * - `warning`: Important warnings about potential issues (orange).
     * - `critical`: Urgent problems or destructive actions (red).
     * - `auto`: Automatically determined based on context.
     * - `neutral`: General information without specific intent (gray).
     * - `caution`: Advisory notices that need attention (yellow).
     *
     * @default 'auto'
     */
    tone: Extract<TextProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'caution' | 'critical'>;
    /**
     * @deprecated Use `Number` for inline numeric values instead.
     */
    fontVariantNumeric: Extract<TextProps$1['fontVariantNumeric'], 'auto' | 'normal' | 'tabular-nums'>;
    /**
     * Font size of the text. The named values also apply their matching
     * line-height and letter-spacing.
     *
     * @default 'auto'
     */
    fontSize: TextFontSize;
    /**
     * Font weight of the text.
     *
     * @default 'auto'
     */
    fontWeight: TextFontWeight;
}

declare const tagName$6 = "s-text";
interface ReactProps$6 extends Partial<TextProps>, Pick<TextProps$1, 'id' | 'children'> {
    /**
     * The text content displayed within the text component, which applies semantic meaning and styling appropriate to the specified text type.
     */
    children?: ComponentChildren$1;
}

declare abstract class TextBase extends PolarisCustomElement implements Pick<TextProps, 'fontVariantNumeric' | 'fontSize' | 'fontWeight' | 'color' | 'type' | 'dir' | 'accessibilityVisibility' | 'interestFor'> {
    fontSize: TextProps['fontSize'];
    fontWeight: TextProps['fontWeight'];
    /**
     * @deprecated Use `Number` for inline numeric values instead.
     */
    fontVariantNumeric: TextProps['fontVariantNumeric'];
    color: TextProps['color'];
    type: TextProps['type'];
    dir: TextProps['dir'];
    accessibilityVisibility: TextProps['accessibilityVisibility'];
    interestFor: string;
    abstract tone: string;
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the text component.
 * @publicDocs
 */
declare class Text extends TextBase implements TextProps {
    tone: TextProps['tone'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$6]: Text;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$6]: ReactProps$6 & PreactBaseElementPropsWithChildren<Text>;
        }
    }
}

type TextAreaProps = PreactFieldProps<Required<TextAreaProps$1>['autocomplete']> & Required<Pick<TextAreaProps$1, 'maxLength' | 'minLength' | 'rows'>>;

declare const tagName$5 = "s-text-area";
interface ReactProps$5 extends Partial<Omit<TextAreaProps, 'error' | 'details'>>, Pick<TextAreaProps$1, 'id'>, FieldReactProps<typeof tagName$5>, FieldSlotInternalReactProps {
}

declare abstract class TextAreaBase extends PreactFieldElement<TextAreaProps['autocomplete']> implements Pick<TextAreaProps, 'maxLength' | 'minLength' | 'rows'> {
    maxLength: TextAreaProps['maxLength'];
    minLength: TextAreaProps['minLength'];
    rows: TextAreaProps['rows'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the text area component.
 * @publicDocs
 */
declare class TextArea extends TextAreaBase implements TextAreaProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$5]: TextArea;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$5]: Omit<ReactProps$5, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<TextArea>;
        }
    }
}

type TextFieldProps = PreactFieldProps<
/** @default 'on' */
Required<TextFieldProps$1>['autocomplete']> & Required<Pick<TextFieldProps$1, 'icon' | 'maxLength' | 'minLength' | 'prefix' | 'suffix'>>;

declare const tagName$4 = "s-text-field";
interface ReactProps$4 extends Partial<Omit<TextFieldProps, 'accessory' | 'error' | 'details'>>, Pick<TextFieldProps$1, 'id'>, FieldReactProps<typeof tagName$4>, FieldSlotInternalReactProps {
    /**
     * Additional content displayed alongside the text field, typically an icon or button that provides related functionality like opening a help tooltip or triggering a modal.
     */
    accessory?: ComponentChildren$1;
}

declare abstract class TextFieldBase extends PreactFieldElement<TextFieldProps['autocomplete']> implements Pick<TextFieldProps, 'icon' | 'maxLength' | 'minLength' | 'prefix' | 'suffix'> {
    icon: TextFieldProps['icon'];
    maxLength: TextFieldProps['maxLength'];
    minLength: TextFieldProps['minLength'];
    prefix: TextFieldProps['prefix'];
    suffix: TextFieldProps['suffix'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the text field component.
 * @publicDocs
 */
declare class TextField extends TextFieldBase implements TextFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$4]: TextField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$4]: Omit<ReactProps$4, 'accessory' | 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementPropsWithChildren<TextField>;
        }
    }
}

/**
 * Configure the following properties on the thumbnail component.
 * @publicDocs
 */
interface ThumbnailProps extends Required<Pick<ThumbnailProps$1, 'src' | 'alt' | 'size'>> {
    /**
     * The size of the product thumbnail image.
     *
     * - `small-200`: Smallest thumbnail size, ideal for compact product lists or tables.
     * - `small-100`: Very small thumbnail, suitable for dense layouts.
     * - `small`: Small thumbnail for space-constrained contexts.
     * - `base`: Default size that balances visibility and space efficiency.
     * - `large`: Larger thumbnail for featured products or detailed views.
     * - `large-100`: Extra large thumbnail for prominent product display.
     */
    size: Extract<ThumbnailProps$1['size'], 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100'>;
}

declare const tagName$3 = "s-thumbnail";
interface ReactProps$3 extends Partial<ThumbnailProps>, Pick<ThumbnailProps$1, 'id'> {
    /**
     * A callback fired when the thumbnail image loads successfully.
     */
    onLoad?: ((event: CallbackEvent<typeof tagName$3>) => void) | null;
    /**
     * A callback fired when the thumbnail image fails to load.
     */
    onError?: ((event: CallbackEvent<typeof tagName$3>) => void) | null;
}

/**
 * Configure the following properties on the thumbnail component.
 * @publicDocs
 */
declare class Thumbnail extends PolarisCustomElement implements ThumbnailProps {
    src: ThumbnailProps['src'];
    alt: ThumbnailProps['alt'];
    size: ThumbnailProps['size'];
    onload: CallbackEventListener<typeof tagName$3> | null;
    onerror: OnErrorEventHandler;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$3]: Thumbnail;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$3]: ReactProps$3 & PreactBaseElementProps<Thumbnail>;
        }
    }
}

/**
 * Configure the following properties on the tooltip component.
 * @publicDocs
 */
interface TooltipProps extends Required<Pick<TooltipProps$1, 'id'>> {
}

declare const tagName$2 = "s-tooltip";
interface ReactProps$2 extends Partial<TooltipProps>, Pick<TooltipProps$1, 'id' | 'children'> {
    /**
     * The informational text or elements displayed within the tooltip overlay, providing helpful context or explanations when users interact with the associated element.
     *
     * Only accepts text, paragraph components, and raw `textContent`.
     */
    children?: ComponentChildren$1;
}

/**
 * Configure the following properties on the tooltip component.
 * @publicDocs
 */
declare class Tooltip extends PreactOverlayElement implements TooltipProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$2]: Tooltip;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$2]: ReactProps$2 & PreactBaseElementPropsWithChildren<Tooltip>;
        }
    }
}

type URLFieldProps = PreactFieldProps<Required<URLFieldProps$1>['autocomplete']> & Required<Pick<URLFieldProps$1, 'maxLength' | 'minLength'>>;

declare const tagName$1 = "s-url-field";
interface ReactProps$1 extends Partial<Omit<URLFieldProps, 'accessory' | 'error' | 'details'>>, Pick<URLFieldProps$1, 'id'>, FieldReactProps<typeof tagName$1>, FieldSlotInternalReactProps {
}

declare abstract class URLFieldBase extends PreactFieldElement<URLFieldProps['autocomplete']> implements Pick<URLFieldProps, 'autocomplete' | 'maxLength' | 'minLength'> {
    autocomplete: URLFieldProps['autocomplete'];
    maxLength: URLFieldProps['maxLength'];
    minLength: URLFieldProps['minLength'];
    constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the URL field component.
 * @publicDocs
 */
declare class URLField extends URLFieldBase implements URLFieldProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$1]: URLField;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$1]: Omit<ReactProps$1, 'error' | 'details'> & FieldSlotPreactProps & PreactBaseElementProps<URLField>;
        }
    }
}

/**
 * Configure the following properties on the unordered list component.
 * @publicDocs
 */
interface UnorderedListProps extends UnorderedListProps$1 {
}

declare const tagName = "s-unordered-list";
interface ReactProps extends Partial<UnorderedListProps>, Pick<UnorderedListProps$1, 'id'> {
    /**
     * The list entries displayed within the unordered list, where each item is marked with a bullet point. Only accepts list item components as children. Each list item represents a single bulleted entry in the list.
     */
    children?: ComponentChildren$1;
}

/**
 * Configure the following properties on the unordered list component.
 * @publicDocs
 */
declare class UnorderedList extends PolarisCustomElement implements UnorderedListProps {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: UnorderedList;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ReactProps & PreactBaseElementPropsWithChildren<UnorderedList>;
        }
    }
}

declare function reactWrap<Props extends {}, ElementType extends HTMLElement>(React: React, tagName: string): ReturnType<typeof reactWrap$1>;

declare const elements: {
    Avatar: typeof Avatar;
    Badge: typeof Badge;
    Banner: typeof Banner;
    Box: typeof Box;
    Button: typeof Button;
    ButtonGroup: typeof ButtonGroup;
    Checkbox: typeof Checkbox;
    Chip: typeof Chip;
    Choice: typeof Choice;
    ChoiceList: typeof ChoiceList;
    Clickable: typeof Clickable;
    ClickableChip: typeof ClickableChip;
    ColorField: typeof ColorField;
    ColorPicker: typeof ColorPicker;
    DateField: typeof DateField;
    DatePicker: typeof DatePicker;
    Divider: typeof Divider;
    DropZone: typeof DropZone;
    EmailField: typeof EmailField;
    EmptyState: typeof EmptyState;
    Grid: typeof Grid;
    GridItem: typeof GridItem;
    Heading: typeof Heading;
    Icon: typeof Icon;
    Image: typeof Image;
    Link: typeof Link;
    ListItem: typeof ListItem;
    Menu: typeof Menu;
    Modal: typeof Modal;
    MoneyField: typeof MoneyField;
    Number: typeof Number;
    NumberField: typeof NumberField;
    Option: typeof Option;
    OptionGroup: typeof OptionGroup;
    OrderedList: typeof OrderedList;
    Page: typeof Page;
    Paragraph: typeof Paragraph;
    PasswordField: typeof PasswordField;
    Popover: typeof Popover;
    PressButton: typeof PressButton;
    Progress: typeof Progress;
    QueryContainer: typeof QueryContainer;
    ScrollBox: typeof ScrollBox;
    SearchField: typeof SearchField;
    Section: typeof Section;
    Select: typeof Select;
    Spinner: typeof Spinner;
    Stack: typeof Stack;
    Switch: typeof Switch;
    Table: typeof Table;
    TableBody: typeof TableBody;
    TableCell: typeof TableCell;
    TableHeader: typeof TableHeader;
    TableHeaderRow: typeof TableHeaderRow;
    TableRow: typeof TableRow;
    Text: typeof Text;
    TextArea: typeof TextArea;
    TextField: typeof TextField;
    Thumbnail: typeof Thumbnail;
    Tooltip: typeof Tooltip;
    URLField: typeof URLField;
    UnorderedList: typeof UnorderedList;
};

export { elements, reactWrap };
export type { AltKey, CallbackEvent, CallbackEventListener, ReactKey };
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$Z]: ReactProps$Z & ReactBaseElementProps<Avatar>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$Z]: ReactProps$Z & ReactBaseElementProps<Avatar>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$Y]: ReactProps$Y & ReactBaseElementPropsWithChildren<Badge>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$Y]: ReactProps$Y & ReactBaseElementPropsWithChildren<Badge>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$X]: Omit<ReactProps$X, 'secondaryActions'> & ReactBaseElementPropsWithChildren<Banner>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$X]: Omit<ReactProps$X, 'secondaryActions'> & ReactBaseElementPropsWithChildren<Banner>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$W]: ReactProps$W & ReactBaseElementPropsWithChildren<Box>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$W]: ReactProps$W & ReactBaseElementPropsWithChildren<Box>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$V]: ReactProps$V & ReactBaseElementPropsWithChildren<Button>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$V]: ReactProps$V & ReactBaseElementPropsWithChildren<Button>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$U]: Omit<ReactProps$U, 'primaryAction' | 'secondaryActions'> & ReactBaseElementPropsWithChildren<ButtonGroup>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$U]: Omit<ReactProps$U, 'primaryAction' | 'secondaryActions'> & ReactBaseElementPropsWithChildren<ButtonGroup>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$T]: Omit<ReactProps$T, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<Checkbox>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$T]: Omit<ReactProps$T, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<Checkbox>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$S]: Omit<ReactProps$S, 'graphic'> & ReactBaseElementPropsWithChildren<Chip>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$S]: Omit<ReactProps$S, 'graphic'> & ReactBaseElementPropsWithChildren<Chip>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$R]: Omit<ReactProps$R, 'details' | 'secondaryContent'> & ReactBaseElementPropsWithChildren<Choice>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$R]: Omit<ReactProps$R, 'details' | 'secondaryContent'> & ReactBaseElementPropsWithChildren<Choice>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$Q]: ReactProps$Q & ReactBaseElementPropsWithChildren<ChoiceList>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$Q]: ReactProps$Q & ReactBaseElementPropsWithChildren<ChoiceList>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$P]: ReactProps$P & ReactBaseElementPropsWithChildren<Clickable>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$P]: ReactProps$P & ReactBaseElementPropsWithChildren<Clickable>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$O]: Omit<ReactProps$O, 'graphic'> & ReactBaseElementPropsWithChildren<ClickableChip>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$O]: Omit<ReactProps$O, 'graphic'> & ReactBaseElementPropsWithChildren<ClickableChip>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$N]: Omit<ReactProps$N, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<ColorField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$N]: Omit<ReactProps$N, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<ColorField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$M]: ReactProps$M & ReactBaseElementProps<ColorPicker>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$M]: ReactProps$M & ReactBaseElementProps<ColorPicker>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$L]: Omit<ReactProps$L, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<DateField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$L]: Omit<ReactProps$L, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<DateField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$K]: ReactProps$K & ReactBaseElementProps<DatePicker>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$K]: ReactProps$K & ReactBaseElementProps<DatePicker>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$J]: ReactProps$J & ReactBaseElementProps<Divider>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$J]: ReactProps$J & ReactBaseElementProps<Divider>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$I]: Omit<ReactProps$I, ReadOnlyPropKeys<typeof reactWrapperConfig>> & {
                value?: '' | null;
            } & ReactBaseElementPropsWithChildren<DropZone>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$I]: Omit<ReactProps$I, ReadOnlyPropKeys<typeof reactWrapperConfig>> & {
                value?: '' | null;
            } & ReactBaseElementPropsWithChildren<DropZone>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$H]: Omit<ReactProps$H, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<EmailField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$H]: Omit<ReactProps$H, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<EmailField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$G]: Omit<ReactProps$G, 'primaryAction' | 'secondaryActions' | 'graphic' | 'subheading'> & ReactBaseElementPropsWithChildren<EmptyState>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$G]: Omit<ReactProps$G, 'primaryAction' | 'secondaryActions' | 'graphic' | 'subheading'> & ReactBaseElementPropsWithChildren<EmptyState>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$F]: ReactProps$F & ReactBaseElementPropsWithChildren<Grid>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$F]: ReactProps$F & ReactBaseElementPropsWithChildren<Grid>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$E]: ReactProps$E & ReactBaseElementPropsWithChildren<GridItem>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$E]: ReactProps$E & ReactBaseElementPropsWithChildren<GridItem>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$D]: ReactProps$D & ReactBaseElementPropsWithChildren<Heading>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$D]: ReactProps$D & ReactBaseElementPropsWithChildren<Heading>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$C]: ReactProps$C & ReactBaseElementProps<Icon>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$C]: ReactProps$C & ReactBaseElementProps<Icon>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$B]: ReactProps$B & ReactBaseElementProps<Image>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$B]: ReactProps$B & ReactBaseElementProps<Image>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$A]: ReactProps$A & ReactBaseElementPropsWithChildren<Link>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$A]: ReactProps$A & ReactBaseElementPropsWithChildren<Link>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$z]: ReactProps$z & ReactBaseElementPropsWithChildren<ListItem>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$z]: ReactProps$z & ReactBaseElementPropsWithChildren<ListItem>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$y]: ReactProps$y & ReactBaseElementPropsWithChildren<Menu>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$y]: ReactProps$y & ReactBaseElementPropsWithChildren<Menu>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$x]: Omit<ReactProps$x, 'primaryAction' | 'secondaryActions'> & ReactBaseElementPropsWithChildren<Modal>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$x]: Omit<ReactProps$x, 'primaryAction' | 'secondaryActions'> & ReactBaseElementPropsWithChildren<Modal>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$w]: Omit<ReactProps$w, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<MoneyField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$w]: Omit<ReactProps$w, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<MoneyField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$v]: ReactProps$v & ReactBaseElementPropsWithChildren<Number>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$v]: ReactProps$v & ReactBaseElementPropsWithChildren<Number>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$u]: Omit<ReactProps$u, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<NumberField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$u]: Omit<ReactProps$u, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<NumberField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$t]: ReactProps$t & ReactBaseElementPropsWithChildren<Option>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$t]: ReactProps$t & ReactBaseElementPropsWithChildren<Option>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$s]: ReactProps$s & ReactBaseElementPropsWithChildren<OptionGroup>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$s]: ReactProps$s & ReactBaseElementPropsWithChildren<OptionGroup>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$r]: ReactProps$r & ReactBaseElementPropsWithChildren<OrderedList>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$r]: ReactProps$r & ReactBaseElementPropsWithChildren<OrderedList>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$q]: Omit<ReactProps$q, 'aside' | 'primaryAction' | 'secondaryActions' | 'breadcrumbActions' | 'supplementalStart'> & ReactBaseElementPropsWithChildren<Page>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$q]: Omit<ReactProps$q, 'aside' | 'primaryAction' | 'secondaryActions' | 'breadcrumbActions' | 'supplementalStart'> & ReactBaseElementPropsWithChildren<Page>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$p]: ReactProps$p & ReactBaseElementPropsWithChildren<Paragraph>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$p]: ReactProps$p & ReactBaseElementPropsWithChildren<Paragraph>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$o]: Omit<ReactProps$o, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<PasswordField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$o]: Omit<ReactProps$o, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<PasswordField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$n]: ReactProps$n & ReactBaseElementPropsWithChildren<Popover>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$n]: ReactProps$n & ReactBaseElementPropsWithChildren<Popover>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$m]: ReactProps$m & ReactBaseElementPropsWithChildren<PressButton>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$m]: ReactProps$m & ReactBaseElementPropsWithChildren<PressButton>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$l]: ReactProps$l & ReactBaseElementProps<Progress>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$l]: ReactProps$l & ReactBaseElementProps<Progress>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$k]: ReactProps$k & ReactBaseElementPropsWithChildren<QueryContainer>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$k]: ReactProps$k & ReactBaseElementPropsWithChildren<QueryContainer>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$j]: ReactProps$j & ReactBaseElementPropsWithChildren<ScrollBox>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$j]: ReactProps$j & ReactBaseElementPropsWithChildren<ScrollBox>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$i]: Omit<ReactProps$i, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<SearchField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$i]: Omit<ReactProps$i, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<SearchField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$h]: Omit<ReactProps$h, 'primaryAction' | 'secondaryActions' | 'graphic' | 'accessory' | 'supplemental'> & ReactBaseElementPropsWithChildren<Section>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$h]: Omit<ReactProps$h, 'primaryAction' | 'secondaryActions' | 'graphic' | 'accessory' | 'supplemental'> & ReactBaseElementPropsWithChildren<Section>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$g]: Omit<ReactProps$g, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementPropsWithChildren<Select>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$g]: Omit<ReactProps$g, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementPropsWithChildren<Select>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$f]: ReactProps$f & ReactBaseElementProps<Spinner>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$f]: ReactProps$f & ReactBaseElementProps<Spinner>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$e]: ReactProps$e & ReactBaseElementPropsWithChildren<Stack>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$e]: ReactProps$e & ReactBaseElementPropsWithChildren<Stack>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$d]: ReactProps$d & ReactBaseElementProps<Switch>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$d]: ReactProps$d & ReactBaseElementProps<Switch>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$c]: Omit<ReactProps$c, 'filters'> & ReactBaseElementPropsWithChildren<Table>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$c]: Omit<ReactProps$c, 'filters'> & ReactBaseElementPropsWithChildren<Table>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$b]: ReactProps$b & ReactBaseElementPropsWithChildren<TableBody>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$b]: ReactProps$b & ReactBaseElementPropsWithChildren<TableBody>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$a]: ReactProps$a & ReactBaseElementPropsWithChildren<TableCell>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$a]: ReactProps$a & ReactBaseElementPropsWithChildren<TableCell>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$9]: ReactProps$9 & ReactBaseElementPropsWithChildren<TableHeader>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$9]: ReactProps$9 & ReactBaseElementPropsWithChildren<TableHeader>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$8]: ReactProps$8 & ReactBaseElementPropsWithChildren<TableHeaderRow>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$8]: ReactProps$8 & ReactBaseElementPropsWithChildren<TableHeaderRow>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$7]: ReactProps$7 & ReactBaseElementPropsWithChildren<TableRow>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$7]: ReactProps$7 & ReactBaseElementPropsWithChildren<TableRow>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$6]: ReactProps$6 & ReactBaseElementPropsWithChildren<Text>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$6]: ReactProps$6 & ReactBaseElementPropsWithChildren<Text>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$5]: Omit<ReactProps$5, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<TextArea>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$5]: Omit<ReactProps$5, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<TextArea>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$4]: Omit<ReactProps$4, 'accessory' | 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementPropsWithChildren<TextField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$4]: Omit<ReactProps$4, 'accessory' | 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementPropsWithChildren<TextField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$3]: ReactProps$3 & ReactBaseElementProps<Thumbnail>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$3]: ReactProps$3 & ReactBaseElementProps<Thumbnail>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$2]: ReactProps$2 & ReactBaseElementPropsWithChildren<Tooltip>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$2]: ReactProps$2 & ReactBaseElementPropsWithChildren<Tooltip>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$1]: Omit<ReactProps$1, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<URLField>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$1]: Omit<ReactProps$1, 'error' | 'details'> & FieldSlotPreactProps & ReactBaseElementProps<URLField>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName]: ReactProps & ReactBaseElementPropsWithChildren<UnorderedList>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName]: ReactProps & ReactBaseElementPropsWithChildren<UnorderedList>;
        }
    }
}

/** Used when an element does not have children. */
interface ReactBaseElementProps<TClass extends HTMLElement> {
    /** Assigns a unique key to this element. */
    key?: React.Key;
    /** Assigns a ref (generally from `useRef()`) to this element. */
    ref?: React.Ref<TClass>;
    /** Assigns this element to a parent's slot. */
    slot?: Lowercase<string>;
}

/** Used when an element has children. */
interface ReactBaseElementPropsWithChildren<TClass extends HTMLElement> extends ReactBaseElementProps<TClass> {
    children?: React.ReactNode;
}
