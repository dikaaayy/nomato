import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import SearchBar from "../SearchBar";
import RecentSearchQuery from "./RecentSearchQuery";
import RecentSearchRestaurant from "./RecentSearchRestaurant";
import SearchResult from "./SearchResult";

export default function Search() {
  const [recentSearch, setRecentSearch] = useState<any[]>([]);
  const [recentSearchRestaurant, setRecentSearchRestaurant] = useState<any[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const query = JSON.parse(localStorage.getItem("recentSearchQuery") || "[]");
    const restaurant = JSON.parse(localStorage.getItem("recentSearchRestaurant") || "[]");
    setRecentSearch(query);
    setRecentSearchRestaurant(restaurant);
  }, []);

  const searchSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (searchRef.current?.value! === "") {
      router.push("/search");
      return;
    }

    if (!recentSearch.some((item: string) => item === searchRef.current?.value!)) {
      const recent = [searchRef.current?.value!, ...recentSearch];
      setRecentSearch(recent);
      localStorage.setItem("recentSearchQuery", JSON.stringify(recent));
    } else {
      const filtered = recentSearch.filter((item: string) => item !== searchRef.current?.value!);
      const recent = [searchRef.current?.value!, ...filtered];
      setRecentSearch(recent);
      localStorage.setItem("recentSearchQuery", JSON.stringify(recent));
    }

    router.push(`/search?q=${searchRef.current?.value!}`, undefined, { shallow: true });
  };

  return (
    <div className="mx-4 pt-8">
      {!router.query.q && <p className="font-semibold text-2xl">Cari</p>}
      <SearchBar handler={searchSubmitHandler} searchRef={searchRef} />
      {!router.query.q ? (
        <>
          <p className="font-semibold mb-2">Pencarian terakhir</p>
          {recentSearch.length !== 0 && <RecentSearchQuery searchRef={searchRef} data={recentSearch} />}
          <p className="font-semibold mb-2">Terakhir kamu liat</p>
          {recentSearchRestaurant.length !== 0 && <RecentSearchRestaurant data={recentSearchRestaurant} />}
        </>
      ) : (
        <SearchResult query={router.query.q} />
      )}
    </div>
  );
}
