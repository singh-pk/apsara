import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import sortEachDepth from "./sortEachDepth";

// Apply global styles for storybook
import "!style-loader!css-loader!less-loader!./storybook.less";
import "../packages/apsara-ui/styles/app.less";

addDecorator((story) => <div style={{ margin: "16px" }}>{story()}</div>);
addParameters({
    options: {
        showRoots: true,
        storySort: sortEachDepth([
            ["Intro", "General", "Navigation", "Data Entry", "Data Display", "..."],
            ["General", "Colors", "Text", "Title", "Icons", "Button", "Input", "..."],
            ["Overview", "...", "_internals"],
        ]),
    },
});
