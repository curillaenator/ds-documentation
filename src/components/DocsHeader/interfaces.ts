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
  | 'headerImage'
  | 'json'
  | 'sass';

export interface DocsHeaderProps extends Partial<Record<FrontMatterHeaderMeta, string>> {
  hasPadding?: boolean;
}
