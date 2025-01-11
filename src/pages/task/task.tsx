import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import taskDescriptionFile from './description.md';

export const Task = () => {
  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    fetch(taskDescriptionFile)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return <Markdown rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>;
};
