import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Chat = () => {
  const [activeTab, setActiveTab] = useState("chat");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const markdownContent =
    "# Hello, *world*!\n# lorem ipsum dolor sit amet, consectetur adipiscing elit in diam nonumy eirm elementum et justo vit.";

  const handleSubmitChatForm = (e) => {
    e.preventDefault();
    // Handle chat form submission
    // You can access the chat message from the form using its ID: e.target.comment.value
    console.log("Chat form submitted:", e.target.comment.value);
    // Clear the form
    e.target.comment.value = "";
  };

  const handleSubmitMessageForm = (e) => {
    e.preventDefault();
    // Handle message form submission
    // You can access the message from the form using its ID: e.target.chat.value
    console.log("Message form submitted:", e.target.chat.value);
    // Clear the form
    e.target.chat.value = "";
  };

  return (
    <>
      <div className="p-2 mb-4 rounded bg-gray-50 dark:bg-gray-900">
        <div className="p-2 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li
              className={`w-full ${activeTab === "chat" ? "bg-gray-100" : ""}`}
            >
              <button
                className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                onClick={() => handleTabClick("chat")}
              >
                Chat
              </button>
            </li>
            <li
              className={`w-full ${
                activeTab === "functions" ? "bg-gray-100" : ""
              }`}
            >
              <button
                className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                onClick={() => handleTabClick("functions")}
              >
                <h1>Function</h1>
              </button>
            </li>
          </ul>
        </div>

        {activeTab === "chat" && (
          <>
            <div className="p-4 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <form onSubmit={handleSubmitChatForm}>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows="4"
                      className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write a comment..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button
                      type="submit"
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    >
                      Post comment
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="p-4 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <div class="flex flex-col">
                <div class="flex justify-end mb-4">
                  <div class="bg-blue-500 text-white rounded-lg p-4">
                    <div>
                      <MarkdownRenderer content={markdownContent} />
                    </div>
                    <div class="flex justify-end mt-2">
                      <button class="px-4 py-2 bg-blue-600 text-white rounded-lg">
                        Action 1
                      </button>
                      <button class="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                        Action 2
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="bg-green-200 dark:bg-purple-800 rounded-lg p-4">
                    <div class="text-gray-800 dark:text-gray-200">
                      <MarkdownRenderer content={markdownContent} />
                    </div>
                    <div class="flex justify-start mt-2">
                      <button class="px-4 py-2 bg-green-600 dark:bg-purple-600 text-white rounded-lg">
                        Action 1
                      </button>
                      <button class="ml-2 px-4 py-2 bg-green-600 dark:bg-purple-600 text-white rounded-lg">
                        Action 2
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded bg-gray-50 dark:bg-gray-800">
              <form onSubmit={handleSubmitMessageForm}>
                <label htmlFor="chat" className="sr-only">
                  Your message
                </label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700  border border-gray-300 dark:border-gray-600">
                  <textarea
                    id="chat"
                    rows="1"
                    className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                  <button
                    type="submit"
                    className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5 rotate-90"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span className="sr-only">Send message</span>
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        {activeTab === "functions" && (
          <div className="p-4 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <Functions />
          </div>
        )}
      </div>
    </>
  );
};

const MarkdownRenderer = ({ content }) => {
  return <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />;
};

export default Chat;

const Functions = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Available Functions
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Download all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <Function
              name={"Function name 1"}
              description={"Function desc 1"}
            />
            <Function
              name={"Function name 1"}
              description={"Function desc 1"}
            />
            <Function
              name={"Function name 1"}
              description={"Function desc 1"}
            />
            <Function
              name={"Function name 1"}
              description={"Function desc 1"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

function Function({ image, name, description, action }) {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="/docs/images/people/profile-picture-1.jpg"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {description}
          </p>
        </div>
        <button className="inline-flex items-center px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:focus:ring-blue-400">
          Use
        </button>
      </div>
    </li>
  );
}
