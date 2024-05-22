import { PUBLICATION } from "../constants";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

function Publication() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Publication
      </motion.h2>
      <div>
        {PUBLICATION.map((publication, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{publication.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {publication.title} -{" "}
                <span className="text-sm">
                  <a
                    href={"https://doi.org/10.1109/EICT61409.2023.10427924"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {publication.link}
                    <FiExternalLink className="inline-block w-4 h-4 mx-1" />
                  </a>
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify tracking-tight">
                {publication.description}
              </p>
              <div className="flex flex-wrap">
                {publication.publisher.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-blue-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publication;
