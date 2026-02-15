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

export async function fetchAllServices(): Promise<Service[]> {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL is not set: (fetchAllServices)');
    return [];
  }

  const url = `${BACKEND_URL}/client/services/all`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Backend error - ${res.status}: ${text}`);
      return [];
    }

    try {
      return (await res.json()) as Service[];
    } catch (e) {
      console.error(`Invalid json:`, e);
      return [];
    }
  } catch (e) {
    console.error(`Fetch failed:`, e);
    return [];
  }
}

export async function fetchServicesByLink(serviceLink: string): Promise<ServiceDto> {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL is not set: (fetchServicesByLink)');
    return notFound();
  }

  const url = `${BACKEND_URL}/client/services/detail/${encodeURIComponent(serviceLink)}`;

  try {
    const res = await fetch(url, jsonInit);

    if (res.status === 404) return notFound();

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Backend error - ${res.status}:`, text);
      return notFound();
    }

    try {
      return (await res.json()) as ServiceDto;
    } catch (e) {
      console.error(`Invalid json:`, e);
      return notFound();
    }
  } catch (e) {
    console.error(`Fetch failed:`, e);
    return notFound();
  }
}

export async function fetchFilterGroups(): Promise<FilterGroup[]> {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL is not set: (fetchFilterGroups)');
    return [];
  }

  const url = `${BACKEND_URL}/client/get-filter-groups`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Backend error - ${res.status}`, text);
      return [];
    }

    try {
      return (await res.json()) as FilterGroup[];
    } catch (e) {
      console.error(`Invalid json:`, e);
      return [];
    }
  } catch (e) {
    console.error(`Fetch failed:`, e);
    return [];
  }
}

export async function fetchHeaderGroups(): Promise<HeaderGroups | null> {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL is not set: (fetchHeaderGroups)');
    return null;
  }

  const url = `${BACKEND_URL}/client/get-header-groups`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Backend error - ${res.status}:`, text);
      return null;
    }

    try {
      return (await res.json()) as HeaderGroups;
    } catch (e) {
      console.error(`Invalid json: `, e);
      return null;
    }
  } catch (e) {
    console.error(`Fetch failed:`, e);
    return null;
  }
}

export async function fetchServicesByGroup(group: string): Promise<ServiceGroupDto[]> {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL is not set: (fetchServicesByGroup)');
    return [];
  }

  const url = `${BACKEND_URL}/client/services/group/${encodeURIComponent(group)}`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Backend error - ${res.status}`, text);
      return [];
    }

    try {
      return (await res.json()) as ServiceGroupDto[];
    } catch (e) {
      console.error(`Invalid json:`, e);
      return [];
    }
  } catch (e) {
    console.error(`Fetch failed:`, e);
    return [];
  }
}

export async function fetchAllCases(): Promise<Case[]> {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL is not set: (fetchAllCases)');
    return [];
  }

  const url = `${BACKEND_URL}/client/cases`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Backend error - ${res.status}`, text);
      return [];
    }

    try {
      return (await res.json()) as Case[];
    } catch (e) {
      console.error(`Invalid JSON:`, e);
      return [];
    }
  } catch (e) {
    console.error(`Fetch failed:`, e);
    return [];
  }
}

export async function fetchAllPosts(): Promise<Post[]> {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL is not set:  (fetchAllPosts)');
    return [];
  }

  const url = `${BACKEND_URL}/client/posts`;

  try {
    const res = await fetch(url, jsonInit);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Backend error - ${res.status}`, text);
      return [];
    }

    try {
      return (await res.json()) as Post[];
    } catch (e) {
      console.error(`Invalid JSON:`, e);
      return [];
    }
  } catch (e) {
    console.error(`Fetch failed:`, e);
    return [];
  }
}

export async function fetchPostByLink(postLink: string): Promise<BlogPostDto> {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL is not set: (fetchPostByLink)');
    return notFound();
  }

  const url = `${BACKEND_URL}/client/posts/${encodeURIComponent(postLink)}`;

  try {
    const res = await fetch(url, jsonInit);

    if (res.status === 404) return notFound();

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Backend error - ${res.status}: ${text}`);
      return notFound();
    }

    try {
      return (await res.json()) as BlogPostDto;
    } catch (e) {
      console.error(`Invalid json:`, e);
      return notFound();
    }
  } catch (e) {
    console.error(`Fetch failed:`, e);
    return notFound();
  }
}
