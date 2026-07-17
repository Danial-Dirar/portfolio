/**
 * Blocking inline script that runs before first paint, done the way Next 16
 * recommends (see "Preventing flash before hydration").
 *
 * The trick is the `type`: on the SERVER it's `text/javascript`, so the browser
 * executes it synchronously while parsing the HTML (anti-FOUC). On the CLIENT it
 * renders as `text/plain`, which React treats as an inert data block — so it does
 * NOT log the dev-only "script tag while rendering" warning and never tries to
 * re-run it. `suppressHydrationWarning` absorbs the resulting `type` mismatch.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
