import { DocsHeaderProps } from '../interfaces';

export const useMeta = (props: DocsHeaderProps) => {
  const { bitbucketLink, figmaLink, jiraLink, version, status, json, sass } = props;

  return {
    links: [
      { title: 'bitbucket', link: bitbucketLink },
      { title: 'figma', link: figmaLink },
      { title: 'jira', link: jiraLink },
    ].filter((l) => !!l.link),

    badges: [
      { title: version, appearance: 'neutral' },
      { title: status, appearance: 'primary' },
      { title: json, appearance: 'outline' },
      { title: sass, appearance: 'outline' },
    ].filter((v) => !!v.title),
  };
};
