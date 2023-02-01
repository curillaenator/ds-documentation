import { ReactNode, LinkHTMLAttributes } from "react";

export interface BadgeProps {
  children: ReactNode;
  label?: string;
  appearance?: "badge_df" | "badge_c" | "badge_o";
}

export interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  icon?: "bitbucket" | "figma" | "jira";
  appearance?: "link_c" | "link_o";
}

type FrontMatterHeaderMeta =
  | "title"
  | "description"
  | "bitbucketLink"
  | "figmaLink"
  | "jiraLink"
  | "designer"
  | "developer"
  | "status"
  | "version"
  | "headerImagepath";

export type DocsHeaderProps = Record<FrontMatterHeaderMeta, string>;
