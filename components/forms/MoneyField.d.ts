import * as React from 'react';

/**
 * Currency amount input.
 * Renders the Polaris 2.0 web component <s-money-field>. Slots: error, details.
 */
export interface MoneyFieldProps {
  /**  */
  value?: string;
  /** A unique identifier for the element. */
  id?: string;
  /** Disables the field, disallowing any interaction. */
  disabled?: boolean;
  /** Additional text to provide context or guidance for the field. */
  details?: string;
  /** Indicate an error to the user. */
  error?: string;
  /** Content to use as the field label. */
  label?: string;
  /** Whether the field needs a value. */
  required?: boolean;
  /** An identifier for the field that is unique within the nearest containing form. */
  name?: string;
  /** Changes the visibility of the component's label. */
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** The default value for the field. */
  defaultValue?: string;
  /** A short hint that describes the expected value of the field. */
  placeholder?: string;
  /** The field cannot be edited by the user. */
  readOnly?: boolean;
  /** A hint as to the intended content of the field. */
  autocomplete?: string;
  /** The highest decimal or integer to be accepted for the field. */
  max?: number;
  /** The lowest decimal or integer to be accepted for the field. */
  min?: number;
  /** The currency code of the field. */
  currencyCode?: "auto" | "USD" | "EUR" | "GBP" | "CAD" | "AFN" | "ALL" | "DZD" | "AOA" | "ARS" | "AMD" | "AWG" | "AUD" | "BBD" | "AZN" | "BDT" | "BSD" | "BHD" | "BIF" | "BZD" | "BMD" | "BTN" | "BAM" | "BRL" | "BOB" | "BWP" | "BND" | "BGN" | "MMK" | "KHR" | "CVE" | "KYD" | "XAF" | "CLP" | "CNY" | "COP" | "KMF" | "CDF" | "CRC" | "HRK" | "CZK" | "DKK" | "DOP" | "XCD" | "EGP" | "ETB" | "XPF" | "FJD" | "GMD" | "GHS" | "GTQ" | "GYD" | "GEL" | "HTG" | "HNL" | "HKD" | "HUF" | "ISK" | "INR" | "IDR" | "ILS" | "IQD" | "JMD" | "JPY" | "JEP" | "JOD" | "KZT" | "KES" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "LSL" | "LRD" | "LTL" | "MGA" | "MKD" | "MOP" | "MWK" | "MVR" | "MXN" | "MYR" | "MUR" | "MDL" | "MAD" | "MNT" | "MZN" | "NAD" | "NPR" | "ANG" | "NZD" | "NIO" | "NGN" | "NOK" | "OMR" | "PAB" | "PKR" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "QAR" | "RON" | "RUB" | "RWF" | "WST" | "SAR" | "RSD" | "SCR" | "SGD" | "SDG" | "SYP" | "ZAR" | "KRW" | "SSP" | "SBD" | "LKR" | "SRD" | "SZL" | "SEK" | "CHF" | "TWD" | "THB" | "TZS" | "TTD" | "TND" | "TRY" | "TMT" | "UGX" | "UAH" | "AED" | "UYU" | "UZS" | "VUV" | "VND" | "XOF" | "YER" | "ZMW" | "BYN" | "BYR" | "DJF" | "ERN" | "FKP" | "GIP" | "GNF" | "IRR" | "KID" | "LYD" | "MRU" | "SLL" | "SHP" | "SOS" | "STD" | "STN" | "TJS" | "TOP" | "VED" | "VEF" | "VES" | "XXX";
  /** Native "input" event. */
  onInput?: (event: Event) => void;
  /** Native "change" event. */
  onChange?: (event: Event) => void;
  /** Native "focus" event. */
  onFocus?: (event: Event) => void;
  /** Native "blur" event. */
  onBlur?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function MoneyField(props: MoneyFieldProps): JSX.Element;
