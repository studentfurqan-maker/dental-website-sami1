function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 animate-pulse">
      <div className="w-14 h-14 rounded-xl bg-slate-200 mb-5" />
      <div className="h-5 bg-slate-200 rounded-lg w-3/4 mb-3" />
      <div className="h-3 bg-slate-200 rounded-lg w-full mb-2" />
      <div className="h-3 bg-slate-200 rounded-lg w-5/6" />
    </div>
  );
}

function SkeletonReview() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 animate-pulse">
      <div className="w-8 h-8 bg-slate-200 rounded mb-4" />
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-slate-200 rounded-full" />
        ))}
      </div>
      <div className="h-3 bg-slate-200 rounded-lg w-full mb-2" />
      <div className="h-3 bg-slate-200 rounded-lg w-full mb-2" />
      <div className="h-3 bg-slate-200 rounded-lg w-4/5 mb-6" />
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div>
          <div className="h-4 bg-slate-200 rounded-lg w-24 mb-1" />
          <div className="h-3 bg-slate-200 rounded-lg w-16" />
        </div>
        <div className="w-10 h-10 bg-slate-200 rounded-full" />
      </div>
    </div>
  );
}

function SkeletonBeforeAfter() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 animate-pulse">
      <div className="h-64 md:h-80 bg-slate-200" />
      <div className="p-5">
        <div className="h-5 bg-slate-200 rounded-lg w-1/2 mb-2" />
        <div className="h-3 bg-slate-200 rounded-lg w-3/4" />
      </div>
    </div>
  );
}

export function ServicesSkeleton() {
  return (
    <div className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="h-6 bg-slate-200 rounded-full w-28 mx-auto mb-4" />
          <div className="h-10 bg-slate-200 rounded-lg w-3/4 md:w-1/2 mx-auto mb-4" />
          <div className="h-4 bg-slate-200 rounded-lg w-2/3 md:w-1/3 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReviewsSkeleton() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="h-6 bg-slate-200 rounded-full w-28 mx-auto mb-4" />
          <div className="h-10 bg-slate-200 rounded-lg w-3/4 md:w-1/2 mx-auto mb-4" />
          <div className="h-4 bg-slate-200 rounded-lg w-2/3 md:w-1/3 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <SkeletonReview key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSkeleton() {
  return (
    <div className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="h-6 bg-slate-200 rounded-full w-28 mx-auto mb-4" />
          <div className="h-10 bg-slate-200 rounded-lg w-3/4 md:w-1/2 mx-auto mb-4" />
          <div className="h-4 bg-slate-200 rounded-lg w-2/3 md:w-1/3 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <SkeletonBeforeAfter key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function DoctorSkeleton() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="h-[400px] md:h-[550px] bg-slate-200 rounded-3xl animate-pulse" />
          <div className="space-y-4">
            <div className="h-6 bg-slate-200 rounded-full w-32" />
            <div className="h-12 bg-slate-200 rounded-lg w-3/4" />
            <div className="h-12 bg-slate-200 rounded-lg w-1/2" />
            <div className="h-4 bg-slate-200 rounded-lg w-full" />
            <div className="h-4 bg-slate-200 rounded-lg w-5/6" />
            <div className="h-4 bg-slate-200 rounded-lg w-4/5" />
            <div className="space-y-3 pt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-slate-200 rounded-full mt-0.5" />
                  <div className="h-4 bg-slate-200 rounded-lg w-full" />
                </div>
              ))}
            </div>
            <div className="h-12 bg-slate-200 rounded-full w-40 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppointmentSkeleton() {
  return (
    <div className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="h-6 bg-slate-200 rounded-full w-28 mx-auto mb-4" />
          <div className="h-10 bg-slate-200 rounded-lg w-3/4 md:w-1/2 mx-auto mb-4" />
          <div className="h-4 bg-slate-200 rounded-lg w-2/3 md:w-1/3 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-64 bg-slate-200 rounded-2xl animate-pulse" />
            <div className="h-48 bg-slate-200 rounded-2xl animate-pulse" />
          </div>
          <div className="lg:col-span-3 h-[500px] bg-slate-200 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
