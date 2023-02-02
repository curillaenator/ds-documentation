type FrontMatterHeaderMeta =
  | 'title'
  | 'description'
  | 'bitbucketLink'
  | 'figmaLink'
  | 'jiraLink'
  | 'designer'
  | 'developer'
  | 'status'
  | 'version'
  | 'headerImagepath'
  | 'json'
  | 'sass';

export type DocsHeaderProps = Partial<Record<FrontMatterHeaderMeta, string>>;
