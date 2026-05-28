let reviewData;
if (!localStorage.getItem("reviewData")) {
    reviewData = {
        101: {
            abdzufar: {
                review: "T.E.A.R.S. Absolute masterpiece. You will be begging for more!",
                rating: 5
            },
            ramarama: {
                review: "Kalo lu nonton ini dan lu ga nangis, something is very wrong with you...",
                rating: 4
            }
        },
        102: {
            abdzufar: {
                review: "A rollercoaster of emotions. You will laugh and cry back and forth in the span of a few minutes.",
                rating: 5
            }
        },
        103: {
            abdzufar: {
                review: "Inspiratif banget :( truly humbles you and puts you in your place.",
                rating: 5
            }
        },
        104: {
            abdzufar: {
                review: "Sedih dan kena sih tapi zuzur ga paham sebagian besar hal teknis di filmnya :p",
                rating: 4
            }
        },
        105: {
            abdzufar: {
                review: "Bisa ga sih bikin film jangan yang sedih sedih banget?!?!",
                rating: 5
            }
        },
        106: {
            abdzufar: {
                review: "Legendary for a reason, but I think it could be better",
                rating: 3
            }
        },
        107: {
            abdzufar: {
                review: "Asik sih tapi at this point udah agak berumur",
                rating: 4
            }
        }
    }
    localStorage.setItem("reviewData", JSON.stringify(reviewData))
} else {
    reviewData = JSON.parse(localStorage.getItem("reviewData"));
    // console.log(reviewData);
}

// console.log(reviewData);

function getAvgRating(movieId, reviewData) {
    let sum = 0;
    let count = 0;
    for (const user in reviewData[String(movieId)]) {
        // console.log(user);
        sum += reviewData[String(movieId)][user].rating;
        count++;
    }
    let result = sum / count
    // console.log(sum, count, result);
    return result;
}