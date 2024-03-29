import Accordion from "@/components/Accordion";
import FilterWuthName from "@/components/FilterWithName";
import Search from "@/components/Search";
import Timer from "@/components/Timer";
import Todo from "@/components/Todo";
import UseReducer from "@/components/UseReducer";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Accordion />
  <Search />
  <Todo />
  <Timer />
  <FilterWuthName />
  <UseReducer />
  </>
  );
}
