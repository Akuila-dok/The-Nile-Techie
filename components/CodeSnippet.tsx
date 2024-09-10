import React from 'react';

const CodeSnippet = () => {
  return (
    <div className="bg-gray-900 text-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-800 p-2 flex">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm whitespace-pre-wrap">
          <span className="text-green-400"> WHY CHOOSE US </span>
          <br />
          <span className="text-green-400"> BECAUSE WE </span>
          <br />
          <br />
          <span className="text-blue-400">import</span> Solution <span className="text-blue-400">from</span> <span className="text-yellow-400">`&quot;Tech-Solutions`&quot;</span>;
          <br />
          <br />
          <span className="text-blue-400">const</span> <span className="text-pink-400">ProblemSolution</span> = () =&gt; {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-green-400"> THIS IS WHERE WE DEFINE THE SOLUTIONS TO YOUR PROBLEMS.</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">return</span> (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-cyan-400">div</span> className=&quot;solution&quot;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-yellow-400">h1</span>&gt;🚀 Transform Your Vision with Us! 🚀&lt;/<span className="text-yellow-400">h1</span>&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-yellow-400">p</span>&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We bring innovation and excellence to every project.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-yellow-400">p</span>&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-cyan-400">div</span>&gt;
          <br />
          &nbsp;&nbsp;{'}'};
          <br />
          <br />
          <span className="text-blue-400">export</span> <span className="text-blue-400">default</span> <span className="text-pink-400">SolvedProblem</span>;
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
