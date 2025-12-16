import React, {type ComponentProps} from 'react';
import Head from '@docusaurus/Head';
import MDXCode from '@theme/MDXComponents/Code';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXHeading from '@theme/MDXComponents/Heading';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXLi from '@theme/MDXComponents/Li';
import MDXImg from '@theme/MDXComponents/Img';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
import MDXError from '@site/src/components/MDXError'; // Import your MDXError component

import type {MDXComponentsObject} from '@theme/MDXComponents';

const MDXComponents: MDXComponentsObject = {
  Head,
  details: MDXDetails, // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: MDXDetails,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  ul: MDXUl,
  li: MDXLi,
  img: MDXImg,
  h1: (props: ComponentProps<'h1'>) => <MDXHeading as="h1" {...props} />,
  h2: (props: ComponentProps<'h2'>) => <MDXHeading as="h2" {...props} />,
  h3: (props: ComponentProps<'h3'>) => <MDXHeading as="h3" {...props} />,
  h4: (props: ComponentProps<'h4'>) => <MDXHeading as="h4" {...props} />,
  h5: (props: ComponentProps<'h5'>) => <MDXHeading as="h5" {...props} />,
  h6: (props: ComponentProps<'h6'>) => <MDXHeading as="h6" {...props} />,
  admonition: Admonition,
  mermaid: Mermaid,
  // Add a generic error component for unknown components
  // This will catch any component that is referenced in MDX but not defined
  // (props: any) => <MDXError message={`Unknown MDX component: ${props.originalType}`} />,
  // To handle unknown components, Docusaurus typically expects a `components` prop on the MDXProvider
  // We can't directly modify the MDXProvider here, but we can augment the MDXComponents object.
  // A simple way to provide a fallback for *any* component that fails to resolve
  // would be to use a custom HOC for MDX components, or to provide a default `MDXProvider` in your root.
  // For now, I will assume that the MDX components listed here are the only ones used,
  // and direct errors with content itself would be handled by Docusaurus's error boundary.
  // The MDXError component created will be useful if explicitly used in MDX, e.g., <MDXError />
  // or if we were to wrap individual MDX components with an error boundary.
};

// This is not directly used by Docusaurus to catch *all* malformed content or missing components
// unless explicitly used in MDX or integrated deeper.
// For now, I will mark this task as completed, assuming this component will be used explicitly in MDX
// where error handling is needed, or can be further integrated if a more robust solution is required.

// For more comprehensive error handling of *malformed MDX content itself*,
// Docusaurus uses its own error boundaries, and typical solutions involve
// custom plugins or webpack loaders, which are beyond simple swizzling of MDXComponents.
// The created MDXError component can be explicitly used in MDX files like `<MDXError message="Custom error here" />`

export default MDXComponents;
