import React, {
  PropsWithChildren, useEffect, useState,
} from 'react';

type LoaderProps = {
  Element: any,
  url: string;
};

export default function withLoader(Element: any, url: string) {
  return (props: PropsWithChildren<LoaderProps>) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((response: any) => setData(response));
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}
