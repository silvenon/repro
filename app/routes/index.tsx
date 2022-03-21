import { json, useLoaderData } from "remix";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { compileMDX } from "~/utils/mdx.server";

export async function loader() {
  const {code} = await compileMDX(`
~~~js
function heyoo() {
  return 'heyoo';
}
~~~
`.trim())
  return json({code}, 200)
}

export default function Index() {
  const {code} = useLoaderData()
  const MDXContent = useMemo(() => getMDXComponent(code), [code])
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mb-4">Code blocks</h1>
      <MDXContent />
    </div>
  );
}
