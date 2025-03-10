"use client";
import React, { useEffect } from "react";
import "../../styles/order-success.css";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div className="success-body">
      <div class="card">
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i class="checkmark">✓</i>
        </div>
        <h1 className="success-h1">Success</h1>
        <p>
          Thank you! <br />
          Your order has been successfully placed
        </p>
      </div>
    </div>
  );
};

export default page;
