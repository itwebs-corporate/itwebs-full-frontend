import { notFound } from 'next/navigation';
import 'server-only';

import type { HeaderGroups } from '@/shared/types/header-groups-dto-types';
import type { BlogPostDto, Post } from '@/shared/types/post-dto-types';
import type { Case, FilterGroup, Service, ServiceDto } from '@/shared/types/service-dto-types';
import type { ServiceGroupDto } from '@/shared/types/service-group-dto-types';

const jsonInit: RequestInit = {
  headers: { Accept: 'application/json' },
  next: { revalidate: 60 },
};
const BACKEND_URL = process.env.BACKEND_URL;
type FetchErr = { code?: string; cause?: { code?: string } };

export async function fetchAllServices(): Promise<Service[]> {
  const fn = 'fetchAllServices';

  if (!BACKEND_URL) {
    console.error(`[${fn}] BACKEND_URL is not set (code=NO_BACKEND_URL)`);
    return [];
  }

  const url = `${BACKEND_URL}/client/services/all`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[${fn}] Backend error (code=HTTP_${res.status}): ${url}`, text);
      return [];
    }

    const data = (await res.json().catch((e) => {
      const err = e as FetchErr;
      const code = err.cause?.code ?? err.code ?? 'INVALID_JSON';
      console.error(`[${fn}] Invalid JSON (code=${code}): ${url}`, e);
      return null;
    })) as Service[] | null;

    return data ?? [];
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';
    console.error(`[${fn}] Fetch failed (code=${code}): ${url}`, e);
    return [];
  }
}

export async function fetchServicesByLink(serviceLink: string): Promise<ServiceDto> {
  const fn = 'fetchServicesByLink';

  if (!BACKEND_URL) {
    console.error(`[${fn}] BACKEND_URL is not set (code=NO_BACKEND_URL)`);
    return notFound();
  }

  const url = `${BACKEND_URL}/client/services/detail/${encodeURIComponent(serviceLink)}`;

  try {
    const res = await fetch(url, jsonInit);

    if (res.status === 404) return notFound();

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[${fn}] Backend error (code=HTTP_${res.status}): ${url}`, text);
      return notFound();
    }

    const data = (await res.json().catch((e) => {
      const err = e as FetchErr;
      const code = err.cause?.code ?? err.code ?? 'INVALID_JSON';
      console.error(`[${fn}] Invalid JSON (code=${code}): ${url}`, e);
      return null;
    })) as ServiceDto | null;

    return data ?? notFound();
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';
    console.error(`[${fn}] Fetch failed (code=${code}): ${url}`, e);
    return notFound();
  }
}

export async function fetchFilterGroups(): Promise<FilterGroup[]> {
  const fn = 'fetchFilterGroups';

  if (!BACKEND_URL) {
    console.error(`[${fn}] BACKEND_URL is not set (code=NO_BACKEND_URL)`);
    return [];
  }

  const url = `${BACKEND_URL}/client/get-filter-groups`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[${fn}] Backend error (code=HTTP_${res.status}): ${url}`, text);
      return [];
    }

    const data = (await res.json().catch((e) => {
      const err = e as FetchErr;
      const code = err.cause?.code ?? err.code ?? 'INVALID_JSON';
      console.error(`[${fn}] Invalid JSON (code=${code}): ${url}`, e);
      return null;
    })) as FilterGroup[] | null;

    return data ?? [];
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';
    console.error(`[${fn}] Fetch failed (code=${code}): ${url}`, e);
    return [];
  }
}

export async function fetchHeaderGroups(): Promise<HeaderGroups | null> {
  const fn = 'fetchHeaderGroups';

  if (!BACKEND_URL) {
    console.error(`[${fn}] BACKEND_URL is not set (code=NO_BACKEND_URL)`);
    return null;
  }

  const url = `${BACKEND_URL}/client/get-header-groups`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[${fn}] Backend error (code=HTTP_${res.status}): ${url}`, text);
      return null;
    }

    const data = (await res.json().catch((e) => {
      const err = e as FetchErr;
      const code = err.cause?.code ?? err.code ?? 'INVALID_JSON';
      console.error(`[${fn}] Invalid JSON (code=${code}): ${url}`, e);
      return null;
    })) as HeaderGroups | null;

    return data ?? null;
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';
    console.error(`[${fn}] Fetch failed (code=${code}): ${url}`, e);
    return null;
  }
}

export async function fetchServicesByGroup(group: string): Promise<ServiceGroupDto[]> {
  const fn = 'fetchServicesByGroup';

  if (!BACKEND_URL) {
    console.error(`[${fn}] BACKEND_URL is not set (code=NO_BACKEND_URL)`);
    return [];
  }

  const url = `${BACKEND_URL}/client/services/group/${encodeURIComponent(group)}`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[${fn}] Backend error (code=HTTP_${res.status}): ${url}`, text);
      return [];
    }

    const data = (await res.json().catch((e) => {
      const err = e as FetchErr;
      const code = err.cause?.code ?? err.code ?? 'INVALID_JSON';
      console.error(`[${fn}] Invalid JSON (code=${code}): ${url}`, e);
      return null;
    })) as ServiceGroupDto[] | null;

    return data ?? [];
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';
    console.error(`[${fn}] Fetch failed (code=${code}): ${url}`, e);
    return [];
  }
}

export async function fetchAllCases(): Promise<Case[]> {
  const fn = 'fetchAllCases';

  if (!BACKEND_URL) {
    console.error(`[${fn}] BACKEND_URL is not set (code=NO_BACKEND_URL)`);
    return [];
  }

  const url = `${BACKEND_URL}/client/cases`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[${fn}] Backend error (code=HTTP_${res.status}): ${url}`, text);
      return [];
    }

    const data = (await res.json().catch((e) => {
      const err = e as FetchErr;
      const code = err.cause?.code ?? err.code ?? 'INVALID_JSON';
      console.error(`[${fn}] Invalid JSON (code=${code}): ${url}`, e);
      return null;
    })) as Case[] | null;

    return data ?? [];
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';
    console.error(`[${fn}] Fetch failed (code=${code}): ${url}`, e);
    return [];
  }
}

export async function fetchAllPosts(): Promise<Post[]> {
  const fn = 'fetchAllPosts';

  if (!BACKEND_URL) {
    console.error(`[${fn}] BACKEND_URL is not set (code=NO_BACKEND_URL)`);
    return [];
  }

  const url = `${BACKEND_URL}/client/posts`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[${fn}] Backend error (code=HTTP_${res.status}): ${url}`, text);
      return [];
    }

    const data = (await res.json().catch((e) => {
      const err = e as FetchErr;
      const code = err.cause?.code ?? err.code ?? 'INVALID_JSON';
      console.error(`[${fn}] Invalid JSON (code=${code}): ${url}`, e);
      return null;
    })) as Post[] | null;

    return data ?? [];
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';
    console.error(`[${fn}] Fetch failed (code=${code}): ${url}`, e);
    return [];
  }
}

export async function fetchPostByLink(postLink: string): Promise<BlogPostDto> {
  const fn = 'fetchPostByLink';

  if (!BACKEND_URL) {
    console.error(`[${fn}] BACKEND_URL is not set (code=NO_BACKEND_URL)`);
    return notFound();
  }

  const url = `${BACKEND_URL}/client/posts/${encodeURIComponent(postLink)}`;

  try {
    const res = await fetch(url, jsonInit);

    if (res.status === 404) return notFound();

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[${fn}] Backend error (code=HTTP_${res.status}): ${url}`, text);
      return notFound();
    }

    const data = (await res.json().catch((e) => {
      const err = e as FetchErr;
      const code = err.cause?.code ?? err.code ?? 'INVALID_JSON';
      console.error(`[${fn}] Invalid JSON (code=${code}): ${url}`, e);
      return null;
    })) as BlogPostDto | null;

    return data ?? notFound();
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';
    console.error(`[${fn}] Fetch failed (code=${code}): ${url}`, e);
    return notFound();
  }
}
