import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";


export default function EditNews(props) {
    const [title, setTitle] = useState("Adil");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    // const [isNotif, setIsNotif] = useState(false);

    const submitHandler = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        router.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className=" min-h-screen bg-slate-50 ">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />

            <div className="card w-full bg-base-100 shadow-xl m-2">
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full m-2 "
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full m-2 "
                        onChange={(description) => setDescription(description.target.value)}
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full m-2 "
                        onChange={(category) => setCategory(category.target.value)}
                        defaultValue={props.myNews.category}
                    />
                    <button
                            className="btn btn-primary m-2"
                            onClick={() => submitHandler()}
                        >
                            Update
                        </button>
                </div>
            </div>
        </div>
    );
}
