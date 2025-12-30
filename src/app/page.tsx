import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion/accordion';
import { Calendar } from '@/components/ui/calendar/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog/dialog';
import { Input } from '@/components/ui/fields/input';
import { Textarea } from '@/components/ui/fields/textarea';
import Header from '@/components/ui/header/header';
import PageBlock from '@/components/ui/page-block/page-block';
import { Skeleton } from '@/components/ui/skeleton/Skeleton';
import ThemeToggle from '@/components/ui/theme-toggle/theme-toggle';
import Typography from '@/components/ui/typography/typography';

export default function Index() {
  return (
    <main>
      <Header
        anotherItems={['SignIn', 'SignUp']}
        items={['Home', 'About', 'Shop', 'Profile']}
        logo="Logo"
      />
      <PageBlock className="bg-chart-1">
        <Typography asChild color="muted" size="xl" weight="bold">
          <div>Block 1 </div>
        </Typography>
        <Link className="text-red-500" href="/posts">
          to Posts page
        </Link>
        <ThemeToggle />
        {/* children */}
        <Typography color="primary" isHover weight="bold">
          text children
        </Typography>
        <Dialog>
          <DialogTrigger>Open dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Example modal</DialogTitle>
              <DialogDescription>Modal this is dialog</DialogDescription>
            </DialogHeader>
            <div className="stackList">
              <Input placeholder="Enter mail" />
              <Textarea placeholder="Enter your wish" />
            </div>
          </DialogContent>
        </Dialog>
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton />
        <Accordion className="mt-4 w-[20vw] rounded border px-3" collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </PageBlock>
      <PageBlock className="bg-chart-2" justify="start">
        {/* asChild */}
        <Typography asChild color="muted" size="xl" weight="bold">
          <div>Block 2</div>
        </Typography>
        <Calendar className="rounded-lg" mode="single" />
        <Link className="text-red-500" href="/posts">
          to Posts page
        </Link>
        <ThemeToggle />
        {/* children */}
        <Typography color="primary" isHover weight="bold">
          text children
        </Typography>
      </PageBlock>
      <PageBlock className="bg-chart-3" justify="end">
        <Typography asChild color="muted" size="xl" weight="bold">
          <div>Block 3</div>
        </Typography>
        <Link className="text-red-500" href="/posts">
          to Posts page
        </Link>
        <ThemeToggle />
        <Typography color="primary" isHover weight="bold">
          text children
        </Typography>
      </PageBlock>
      {/* footer */}
      <PageBlock align="start" direction="row" fullScreen={false} justify="between">
        <Typography size="xl" weight="bold">
          Logo
        </Typography>
        <ul className="stackList">
          {['Footer', 'sub1', 'sub2', 'sub3', 'sub4'].map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>{' '}
        <ul className="stackList">
          {['Footer', 'sub1', 'sub2', 'sub3', 'sub4'].map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </PageBlock>
    </main>
  );
}
