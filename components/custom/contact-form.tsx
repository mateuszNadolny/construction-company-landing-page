"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="flex flex-col w-full h-full p-4 sm:p-8 md:p-12">
      <motion.h2
        className="text-xl sm:text-2xl xl:text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Build Your Dream Home Together
      </motion.h2>
      <motion.p
        className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        We are here to help you find the perfect property and make your dream
        home a reality.
      </motion.p>

      <motion.form
        className="flex flex-col gap-3 sm:gap-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="first-name" className="text-sm text-zinc-400">
              Name
            </Label>
            <Input
              id="first-name"
              placeholder="Enter your name"
              className="bg-zinc-800 text-slate-50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700 placeholder:text-zinc-600"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="email" className="text-sm text-zinc-400">
              E-mail
            </Label>
            <Input
              id="email"
              placeholder="Enter your e-mail"
              className="bg-zinc-800 text-slate-50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700 placeholder:text-zinc-600"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="i-want-to" className="text-sm text-zinc-400">
            I Want to
          </Label>
          <Input
            id="i-want-to"
            placeholder="Buy Property"
            className="bg-zinc-800 text-slate-50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700 placeholder:text-zinc-600"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="notes" className="text-sm text-zinc-400">
            Notes
          </Label>
          <Textarea
            id="notes"
            placeholder="Tell us more about what you're looking for..."
            className="bg-zinc-800 text-slate-50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700 h-24 sm:h-32 md:h-40 resize-none placeholder:text-zinc-600"
          />
        </div>

        <Button
          type="submit"
          className="w-full sm:w-1/3 bg-slate-50 text-zinc-900 hover:bg-zinc-200 font-medium p-4 text-sm rounded-md transition-all duration-200 mt-4 "
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Get in Touch
        </Button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
