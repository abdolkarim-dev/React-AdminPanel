import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Content */}
        <div className="w-full">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Personal Information
            </h4>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Your personal information
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* First Name */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                First Name
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                Abdolkarim
              </p>
            </div>

            {/* Last Name */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Last Name
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                Bazdar
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Email Address
              </p>

              <p className="truncate text-sm font-semibold text-gray-800 dark:text-white/90">
                bazdarabdolkarim@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Phone
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                +98 917 382 6650
              </p>
            </div>

            {/* Bio */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Bio
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                I'm abdolkarim
              </p>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={openModal}
          className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.05] dark:hover:text-white lg:w-auto"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              fill=""
            />
          </svg>
          Edit
        </button>
      </div>

      {/* Modal */}
      <Modal
      showCloseButton={false}
        isOpen={isOpen}
        onClose={closeModal}
        className="w-full max-w-[700px] m-4 overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-950"
      >
        <div className="relative w-full">
          {/* Header */}
          <div className="bg-gray-900 px-6 py-6 dark:bg-gray-800 sm:px-8">
            <div className="flex items-start justify-between">
              <div>
                <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-gray-400">
                  Account Settings
                </span>

                <h4 className="text-2xl font-bold text-white">
                  Personal Information
                </h4>

                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-400">
                  Manage your personal details and social profiles from one
                  place.
                </p>
              </div>

              

              <button
                type="button"
                onClick={closeModal}
                className="flex h-10 w-10 shrink-0 items-center justify-center
                     rounded-xl bg-white/10 text-gray-300
                     transition-all duration-200
                     hover:bg-white/20 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col">
            {/* Content */}
            <div className="custom-scrollbar max-h-[520px] overflow-y-auto px-6 py-7 sm:px-8">
              {/* Social Links */}
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414m3.656-3.656l1.414-1.414a4 4 0 015.656 5.656l-1.414 1.414m-6.656 1.414l4-4"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5 className="text-base font-semibold text-gray-800 dark:text-white">
                      Social Links
                    </h5>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Add your social media profiles
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5 dark:border-gray-800 dark:bg-gray-900/50">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <Label>Facebook</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="https://www.facebook.com"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>X.com</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="https://x.com"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>LinkedIn</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="https://www.linkedin.com/company"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Instagram</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="https://instagram.com"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Personal Information */}
              <section className="mt-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5 className="text-base font-semibold text-gray-800 dark:text-white">
                      Personal Details
                    </h5>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Update your basic account information
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5 dark:border-gray-800 dark:bg-gray-900/50">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <Label>First Name</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="Abdolkarim"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Last Name</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="Bazdar"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Email Address</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="bazdarabdolkarim@gmail.com"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Phone</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="+09 363 398 46"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <Label>Bio</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          value="Team Manager"
                          className="rounded-xl bg-white dark:bg-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div
              className="flex flex-col-reverse gap-3 border-t border-gray-100
                   bg-gray-50 px-6 py-5
                   dark:border-gray-800 dark:bg-gray-900/50
                   sm:flex-row sm:items-center sm:justify-end sm:px-8"
            >
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={closeModal}
                className="rounded-xl px-6"
              >
                Cancel
              </Button>

              <Button
                type="button"
                size="sm"
                onClick={handleSave}
                className="rounded-xl px-6"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
