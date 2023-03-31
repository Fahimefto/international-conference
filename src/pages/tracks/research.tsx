import React from "react";
import Layout from "../../components/common/Layout";
import TitleBar from "../../components/common/TitleBar";
export default function Reserch() {
  return (
    <Layout>
      <TitleBar title="Research Track" />
      <div className="m-10 max-w-screen-xl mx-10 lg:mx-auto space-y-5 leading-relaxed text-justify">
        <h1 className="font-bold text-xl">Call for Papers</h1>
        <h2 className="font-bold text-2xl">Goal and Scope</h2>
        <p>
          IEEE International Conference on Software Maintenance and Evolution
          (ICSME) is the premier forum for researchers and practitioners to
          present and discuss the most recent innovations, trends, experiences,
          and challenges in software maintenance and evolution. We invite high
          quality submissions describing significant, original, and unpublished
          results related to but not limited to any of the following software
          maintenance and evolution topics (in alphabetical order): <br></br>
          Change and defect management Code cloning and provenance Concept and
          feature location Continuous integration/deployment Empirical studies
          of software maintenance and evolution Evolution of non-code artifacts
          Human aspects of software maintenance and evolution Maintenance and
          evolution of model-based methods Maintenance and evolution processes
          Maintenance and evolution of mobile apps Maintenance and evolution of
          service-oriented and cloud computing systems Maintenance versus
          release process Mining software repositories Productivity of software
          engineers during maintenance and evolution Release engineering Reverse
          engineering and re-engineering Run-time evolution and dynamic
          configuration Software and system comprehension Software migration and
          renovation Software quality assessment Software refactoring and
          restructuring Software testing theory and practice Source code
          analysis and manipulation Technical Debt
        </p>
        <p>
          ICSME welcomes innovative ideas that are timely, well presented, and
          evaluated. All submissions must position themselves within the
          existing literature, describe the relevance of the results to specific
          software engineering goals, and include a clear motivation and
          presentation of the work. To establish a consistent set of
          expectations in the review process authors are asked, as the first
          word in their list of keywords, to identify their paper with one of
          the following categories:
        </p>
        <p>
          1. Technological A paper in which the main contribution is of a
          technical nature. This includes novel tools, new algorithms, new
          theories, modeling languages, infrastructures, processes, methods, and
          other technologies. Such a contribution does not necessarily need to
          be evaluated with humans. However, clear arguments, backed up by
          evidence as appropriate (whether through a proof, complexity analysis,
          or run-time analysis, among others), must show how and why the
          technology is beneficial, why a new method is needed, whether it is in
          automating or supporting some user task, refining our modeling
          capabilities, improving some key system property, etc. 2. Empirical A
          paper in which the main contribution is the empirical study of a
          software evolution technology or phenomenon. This includes controlled
          experiments, case studies, and surveys of professionals reporting
          qualitative or quantitative data, and analysis results. The authors
          should provide convincing arguments, with commensurate experiences,
          why certain methods or models are needed. Such a contribution will be
          judged on its study design, the appropriateness and correctness of its
          analysis, and its discussion of threats to validity. Replications are
          welcome. 3. Perspectives A paper in which the main contribution is a
          novel perspective on the field as a whole, or part thereof. This
          includes assessments of the current state of the art and achievements,
          systematic literature reviews, framing of an important problem,
          forward-looking thought pieces, connections to other disciplines, and
          historical perspectives. Such a contribution must, in a highly
          convincing manner, clearly articulate its vision, novelty, and
          potential impact.
        </p>
      </div>
    </Layout>
  );
}
