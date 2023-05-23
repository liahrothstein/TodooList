import React from "react";

export const Illumination = (props) => {
    const { filter, string } = props;

    if (!filter) return string;
    const regularExp = new RegExp(filter, 'ig');
    const matchValue = string.match(regularExp);

    if (matchValue) {
        return string.split(regularExp).map((e, i, arr) => {
            if (i < arr.length - 1) {
                const c = matchValue.shift()

                return <React.Fragment key={Math.random(1, 10)}>{e}<span style={{ backgroundColor: 'yellow' }}>{c}</span></React.Fragment>
            }

            return e

        })
    }

    return string;
}